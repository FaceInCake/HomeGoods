#!/usr/bin/env node

// WARNING: This should be used for development only
// If I catch you running this in production Imma slap you



import phpServer from 'php-server';
// import phpServer from "php-server";

const [,, ...args] = process.argv;

const server = await phpServer();
console.log(`PHP server running at ${server.url}`);    
