# Aplicación Web Tradicional (MPA)

## 📌 Flujo de Carga de Página

1. **El usuario accede a la página**
   - Se envía una solicitud al servidor.
   - El servidor devuelve un **HTML completo**.
  
2. **El usuario navega a otra página**
   - Se hace una nueva solicitud.
   - Se vuelve a cargar **todo el contenido** desde cero.

---

## 🔄 Proceso de carga de una nueva página:

```mermaid
sequenceDiagram
    participant Usuario
    participant Navegador
    participant Servidor

    Usuario->>Navegador: Ingresa URL
    Navegador->>Servidor: GET /pagina.html
    activate Servidor
    Servidor-->>Navegador: Devuelve HTML completo
    deactivate Servidor

    Usuario->>Navegador: Hace clic en un enlace
    Navegador->>Servidor: GET /otra-pagina.html
    activate Servidor
    Servidor-->>Navegador: Devuelve nueva página HTML completa
    deactivate Servidor