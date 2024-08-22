export async function logUser(Email, Contrasenia) {
    try {
        const response = await fetch('http://localhost:3368/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Email, Contrasenia }),
        });

        const data = response.json()
        return data;

    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
};

export async function registerUser(NombreUsuario, ApellidoUsuario, Genero, FechaNacimiento, Pais, Email, Contrasenia, Roles, TipoSangre) {

    try {
        const response = await fetch('http://localhost:3368/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ NombreUsuario, ApellidoUsuario, Genero, FechaNacimiento, Pais, Email, Contrasenia, Roles, TipoSangre }),
        });

        const data = response.json()
        return data;

    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
}

export async function getUsers() {

    try {
        const response = await fetch('http://localhost:3368/user');

        const data = response.json()
        return data

    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }

}