# TempApi.PersonApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createperson**](PersonApi.md#createperson) | **POST** /person | Creates the data
[**deleteperson**](PersonApi.md#deleteperson) | **DELETE** /person/{personId} | Delete the element
[**getAllperson**](PersonApi.md#getAllperson) | **GET** /person/getAll | Get all the data
[**getByParamsperson**](PersonApi.md#getByParamsperson) | **GET** /person/getByParams | Get all the data based on user query
[**getperson**](PersonApi.md#getperson) | **GET** /person/{personId} | Get the element
[**updateperson**](PersonApi.md#updateperson) | **PUT** /person/{personId} | Updates the element



## createperson

> Person createperson(person)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PersonApi();
let person = new TempApi.Person(); // Person | data to be created
apiInstance.createperson(person, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | [**Person**](Person.md)| data to be created | 

### Return type

[**Person**](Person.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteperson

> deleteperson(personId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PersonApi();
let personId = "personId_example"; // String | the Id parameter
apiInstance.deleteperson(personId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllperson

> [Person] getAllperson()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PersonApi();
apiInstance.getAllperson((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Person]**](Person.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsperson

> [Person] getByParamsperson(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PersonApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsperson(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Person]**](Person.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getperson

> Person getperson(personId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PersonApi();
let personId = "personId_example"; // String | the Id parameter
apiInstance.getperson(personId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| the Id parameter | 

### Return type

[**Person**](Person.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateperson

> Person updateperson(personId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PersonApi();
let personId = "personId_example"; // String | the Id parameter
let opts = {
  'person': new TempApi.Person() // Person | data to be updated
};
apiInstance.updateperson(personId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| the Id parameter | 
 **person** | [**Person**](Person.md)| data to be updated | [optional] 

### Return type

[**Person**](Person.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

