# Functional MovementZ - Monorepo

This is a monorepo containing both the CMS (Strapi) and web application (Next.js) for Functional MovementZ.

## Project Structure

```
FM/
├── cms/          # Strapi CMS application
├── web/          # Next.js web application
├── .gitignore    # Monorepo gitignore
└── README.md     # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FM
```

2. Install dependencies for both applications:

```bash
# Install CMS dependencies
cd cms
npm install

# Install web dependencies
cd ../web
npm install
```

### Development

#### CMS (Strapi)

```bash
cd cms
npm run develop
```

The CMS will be available at `http://localhost:1337`

#### Web Application (Next.js)

```bash
cd web
npm run dev
```

The web application will be available at `http://localhost:3000`

### Building for Production

#### CMS
```bash
cd cms
npm run build
npm run start
```

#### Web Application
```bash
cd web
npm run build
npm run start
```

## Environment Variables

### CMS (.env)
Create a `.env` file in the `cms` directory:
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret
```

### Web Application (.env.local)
Create a `.env.local` file in the `web` directory:
```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

## Deployment

### CMS Deployment
1. Build the CMS: `cd cms && npm run build`
2. Deploy the `cms/build` directory to your hosting provider

### Web Application Deployment
1. Build the web app: `cd web && npm run build`
2. Deploy the `web/.next` directory to your hosting provider

## Contributing

1. Create a feature branch
2. Make your changes
3. Test both applications
4. Submit a pull request

## License

[Add your license information here] 