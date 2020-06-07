# Sample Performance Tests with Artillery

Performance tests' sample running a search at Google.

## Set up

You'll need:

- Node;

Install Dependencies:

```bash
npm install
```

## Run Test

```bash
artillery run --config <config file to all tests>.yaml -e <env config. ex: staging> <./file_to/test>.yaml -o <json report>.json
```

## Run with debug mode for the request

```bash
DEBUG=http artillery run --config <config file to all tests>.yaml -e <env config. ex: staging> <./file_to/test>.yaml -o <json report>.json
```

## Run with debug mode looking for the response on the terminal

```bash
DEBUG=http:response artillery run --config <config file to all tests>.yaml -e <env config. ex: staging> <./file_to/test>.yaml -o <json report>.json
```

## Send information to DataDog

This dependency is found in package.json, but if for some reason it doesn't install, you can try it this way:

```bash
npm install artillery-plugin-publish-metrics
```

or (for global instalation):

```bash
npm install -g artillery-plugin-publish-metrics
```

Then to run you need to export first the data-dog-api-key, and then run the tests

```bash
export DD_API_KEY=<data-dog-api-key>
artillery run --config <config file to all tests>.yaml -e <env config. ex: staging> <./file_to/test>.yaml
```

## Generate report

```bash
artillery report <name of the json created on the run>.json
```

## By scripts

A package.json was generated for this folder, targeting only the dependencies used for the test. For now there is only one example script configured. But basically the execution would be:

```bash
npm run test
```

## Google RapidAPI-Key

To run these tests you'll need a X-RapidAPI-Key, it's just to go to [Google API documentation](https://rapidapi.com/apigeek/api/google-search3?endpoint=apiendpoint_6d6f0f0c-47cd-4e4a-bdef-57e618dbee26) and signup to get your `X-RapidAPI-Key`, after this you'll need to run:

```bash
export RAPID_API_KEY=<google-api-key>
```
