# API Documentation

## Create Employee

Endpoint: localhost:8000/api/createEmployee

### Request

json
{
  "name": "Rose",
  "dob": "1996-01-15",
  "salary": 50000,
  "email": "rose@gmail.com",
  "status": "active",
  "joiningDate": "2022-01-15",
  "relievingDate": "2022-01-15"
}


### Response

The response will include details about the created employee.

---

## Get All Employees

Endpoint: localhost:8000/api/getAllEmployee

### Request

This endpoint does not require any specific request parameters.

### Response

The response will contain a list of all employees with their respective details.

---

## Update Employee

Endpoint: localhost:8000/api/updateEmployee/{_id}

### Request

json
{
  "name": "Roseupdated",
  "dob": "1996-01-15",
  "salary": 50000,
  "email": "rose@gmail.com",
  "status": "active",
  "joiningDate": "2022-01-15",
  "relievingDate": "2022-01-15"
}


### Response

The response will include details about the updated employee.

---

## Delete Employee

Endpoint: localhost:8000/api/deleteEmployee/{_id}

### Request

This endpoint does not require any specific request parameters.

### Response

The response will confirm the successful deletion of the specified employee.

---

Make sure to replace the placeholder URLs with the actual base URL of your API. If there are additional features or endpoints, please document them accordingly.