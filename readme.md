# Express and Sequelize Template

Directions:
1. Clone this template
1. run `npm install` to install dependencies
1. download drivers for preferred database
1. rename `template.env` to `.env` and change variables for your needs
1. enjoy

This template already has a full set of restful routes and a model for a notes api to act as an example how to create an API for your models.

## Note on CORS

The cors are settings are set to kick in if the ENVIRONMENT variable is set to `production` so make sure in your deployment environment that `ENVIRONMENT=production` for your environment variables.