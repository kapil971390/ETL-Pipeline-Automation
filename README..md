# Project Name: Automated ETL Testing Framework

## Features
- **End-to-End ETL Validation**: Automates the testing of Extract, Transform, and Load processes to ensure data integrity.
- **Source-to-Target Comparison**: Verifies data consistency between source and destination databases.
- **Data Quality Checks**: Includes validations such as row counts, column-level comparisons, and transformation logic testing.
- **Scalable Architecture**: Easily extendable to support additional test cases or databases.
- **Automated Execution**: Run tests in batch or integrate into CI/CD pipelines for continuous testing.

## Tech Stack
- **CodeceptJS**: Test automation framework.
- **Playwright**: Browser automation library.
- **JavaScript**: Primary scripting language.
- **MySQL**: Source and destination databases for testing.
- **Docker**: Used for running databases and the automation framework in isolated containers.

## Usage Instructions

### Prerequisites
- Install **Node.js** and **npm**.
- Install **Docker** for containerized database environments (optional but recommended).
- Set up source and target databases with ETL data.

### Setup
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
