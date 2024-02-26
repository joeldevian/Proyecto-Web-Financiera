/*
** CREAR BASE DE DATO
*/
CREATE DATABASE andelogin;

/*
** CREAR TABLAS
*/
-- Crear tabla de Usuarios
-- Crear tabla de Usuarios
CREATE TABLE Usuarios (
    UsuarioID INT AUTO_INCREMENT PRIMARY KEY,
    NombreUsuario VARCHAR(50) NOT NULL,
    Contraseña VARCHAR(255) NOT NULL, -- Almacenar hashes de contraseñas (longitud adecuada para almacenar hashes)
    CorreoElectronico VARCHAR(100) NOT NULL,
    Activo TINYINT NOT NULL DEFAULT 1, -- Indica si la cuenta está activa o no
    UNIQUE (NombreUsuario), -- Asegura que no hayan nombres de usuario duplicados
    INDEX (CorreoElectronico) -- Índice para búsquedas rápidas por correo electrónico
);

-- Crear tabla de Sesiones
CREATE TABLE Sesiones (
    SesionID INT AUTO_INCREMENT PRIMARY KEY,
    UsuarioID INT NOT NULL,
    FechaInicio DATETIME NOT NULL,
    FechaUltimaActividad DATETIME,
    FechaCierre DATETIME, -- Agregar campo para registrar el cierre de sesión
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);
