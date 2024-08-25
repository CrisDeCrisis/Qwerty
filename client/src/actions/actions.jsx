const API_URL = 'http://localhost:3368/user'; // Define la URL base de la API

// Función genérica para realizar solicitudes a la API
async function fetchData(endpoint, options) {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, options); // Realiza la solicitud a la API
        const data = await response.json(); // Convierte la respuesta a JSON
        return data; // Retorna los datos obtenidos
    } catch (error) {
        console.error('Error al realizar la solicitud:', error); // Muestra un error en la consola si la solicitud falla
        throw error; // Lanza el error para que pueda ser manejado por el llamador
    }
}

// Función para iniciar sesión de un usuario
export async function logUser(Email, Contrasenia) {
    const data = await fetchData('/login', {
        method: 'POST', // Método HTTP
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido
        },
        body: JSON.stringify({ Email, Contrasenia }), // Cuerpo de la solicitud en formato JSON
    });
    localStorage.setItem('token', data.token); // Guarda el token en el almacenamiento local
    return data; // Retorna los datos obtenidos
}

// Función para registrar un nuevo usuario
export async function registerUser(NombreUsuario, ApellidoUsuario, Genero, FechaNacimiento, Pais, Email, Contrasenia, Roles, TipoSangre) {
    // Función para validar la contraseña
    const validarContrasenia = (contrasenia) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasenia);

    if (!validarContrasenia(Contrasenia)) {
        throw new Error('La contraseña no cumple con los requisitos.'); // Lanza un error si la contraseña no es válida
    }

    return await fetchData('/register', {
        method: 'POST', // Método HTTP
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido
        },
        body: JSON.stringify({ NombreUsuario, ApellidoUsuario, Genero, FechaNacimiento, Pais, Email, Contrasenia, Roles, TipoSangre }), // Cuerpo de la solicitud en formato JSON
    });
}

// Función para obtener todos los usuarios
export async function getUsers() {
    return await fetchData('/'); // Realiza una solicitud GET a la raíz de la API
}

// Función para obtener usuarios por tipo de sangre
export async function getUsersByBlood() {
    return await fetchData('/match', {
        method: 'GET', // Método HTTP
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido
            'Authorization': `${localStorage.getItem('token')}`, // Token de autorización
        },
    });
}