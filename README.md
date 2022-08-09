[![NodeJS Build and Test](https://github.com/FaceInCake/HomeGoods/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/FaceInCake/HomeGoods/actions/workflows/node.js.yml)

# Development

## Quick Start

1. Clone the repo onto your computer
2. Download nodejs if you don't have it
3. Open a terminal, navigate to the new directory, and run `npm install`
4. Download XAMPP if you dont have it
5. Configure Apache to serve the new build folder
6. Start the Apache server
7. Start the MySQL server
8. Go to `phpMyAdmin`
  8. Create a new database
  8. Create a user to interact with this database
9. Create a `.env` file in the `public/php/vars` folder
10. Populate the `.env` file with php variables of the database credentials
11. Populate the database using the [SQL Files](working/sql)
12. Run `npm run build`
13. You should be able to visit `localhost` with no issue

## Dependencies

- NodeJS
  - package.json contains additional nodejs modules
- XAMPP
- Bootstrap

## Testing

- Run `npm run build` to compile the website for production
- Run `npm test` to run the basic tests

## Deployment

Once you've compiled and built the website, you can simply transfer the files to your server.

I personally `sftp`ed them to my server using a .vscode sftp config file.

However, you can also `scp` or otherwise.
