# Finance App

![Expo](https://img.shields.io/badge/Expo-54-000020?logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web-blue)
![License](https://img.shields.io/badge/License-MIT-green)

Aplicación móvil de finanzas personales para **gestionar ingresos, ahorros, gastos y visualizar tu balance** de forma simple e intuitiva.  
Desarrollada con **Expo + React Native + TypeScript**.

---

## Características

-  Registro de **ingresos y gastos**
-  Visualización de **balance total**
-  Organización por fechas
-  Manejo de datos sensibles con almacenamiento seguro
-  Uso de variables de entorno con `.env`
-  App móvil multiplataforma (Android / iOS / Web)

---

## Tecnologías

-  React + React Native  
-  Expo  
-  TypeScript  
-  React Native Paper (UI)  
-  React Navigation  
-  Axios (consumo de APIs)

---

## 📦 Dependencias

Este proyecto está construido con **Expo + React Native + TypeScript** y utiliza las siguientes dependencias:

### 🔹 Dependencias principales

- **expo** → Framework para desarrollo rápido de apps móviles con React Native  
- **react** → Librería base para construir interfaces  
- **react-native** → Motor principal para apps móviles  
- **@react-navigation/native** → Manejo de navegación entre pantallas  
- **@react-navigation/native-stack** → Stack Navigator para transiciones nativas  
- **react-native-paper** → Componentes UI con Material Design  
- **react-native-safe-area-context** → Manejo de zonas seguras en dispositivos  
- **react-native-screens** → Optimización de rendimiento en navegación  
- **expo-status-bar** → Control de la barra de estado del sistema  
- **expo-secure-store** → Almacenamiento seguro de datos sensibles  
- **axios** → Cliente HTTP para consumir APIs  
- **react-native-dotenv** → Soporte para variables de entorno desde `.env`

### Dependencias de desarrollo

- **typescript** → Tipado estático para JavaScript  
- **@types/react** → Tipos para React  
- **@types/react-native-dotenv** → Tipos para variables de entorno

---

## ⚙️ Instalación

1. Clona el repositorio:

	git clone https://github.com/santxjoya/finance-app.git

2. Entra al proyecto:

	cd finance-app

3. Instala dependencias:

	npm install
	o
	yarn install

4. Configura las variables de entorno:

	Crea un archivo `.env` en la raíz:

	API_URL=https://tu-api.com

5. Inicia la app:

	npm start
	o
	expo start
