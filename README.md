
# Google Trends API Wrapper

This is a Node.js application that serves as a wrapper for the Google Trends API. It provides two endpoints: `/api/interestOverTime` and `/api/relatedTopics`, which retrieve interest over time data and related topics data respectively.

The application is built using the Express framework and utilizes the `google-trends-api` package to interact with the Google Trends API. It is also configured with CORS support using the `cors` middleware.

## Deployed on Vercel

The application is deployed on Vercel, a cloud platform for static and serverless deployments. You can access the deployed application at [https://your-app.vercel.app](https://e-trends-api.vercel.app/).

## Prerequisites

Before running the application locally or deploying it on your own, make sure you have the following installed:

- Node.js (version 14 or above)
- npm (Node Package Manager) or yarn

## Installation

1. Clone the repository or download the code.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Usage

To run the application locally, use the following command:

```bash
npm start
```

The application will start on port 5000. You can access the endpoints as follows:

- Interest Over Time: [http://localhost:5000/api/interestOverTime?ids=<category_id>,<keyword>](http://localhost:5000/api/interestOverTime?ids=<category_id>,<keyword>)
- Related Topics: [http://localhost:5000/api/relatedTopics?ids=<category_id>,<keyword>](http://localhost:5000/api/relatedTopics?ids=<category_id>,<keyword>)

Replace `<category_id>` with one of the available category IDs from the `category` object defined in the code. Replace `<keyword>` with the desired keyword.

## API Endpoints

### `GET /api/interestOverTime`

Retrieves interest over time data based on the specified category and keyword.

Query Parameters:
- `ids`: Comma-separated values representing `<category_id>,<keyword>`

Example: `/api/interestOverTime?ids=Finance,Banking`

### `GET /api/relatedTopics`

Retrieves related topics data based on the specified category and keyword.

Query Parameters:
- `ids`: Comma-separated values representing `<category_id>,<keyword>`

Example: `/api/relatedTopics?ids=Travel,Vacation`

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

---

