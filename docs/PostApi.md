# TempApi.PostApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createpost**](PostApi.md#createpost) | **POST** /post | Creates the data
[**deletepost**](PostApi.md#deletepost) | **DELETE** /post/{postId} | Delete the element
[**getAllpost**](PostApi.md#getAllpost) | **GET** /post/getAll | Get all the data
[**getByParamspost**](PostApi.md#getByParamspost) | **GET** /post/getByParams/{attribute}/{value} | Get all the data based on user query
[**getpost**](PostApi.md#getpost) | **GET** /post/{postId} | Get the element
[**updatepost**](PostApi.md#updatepost) | **PUT** /post/{postId} | Updates the element



## createpost

> Post createpost(post)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PostApi();
let post = new TempApi.Post(); // Post | data to be created
apiInstance.createpost(post, (error, data, response) => {
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
 **post** | [**Post**](Post.md)| data to be created | 

### Return type

[**Post**](Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletepost

> deletepost(postId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PostApi();
let postId = "postId_example"; // String | the Id parameter
apiInstance.deletepost(postId, (error, data, response) => {
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
 **postId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllpost

> [Post] getAllpost()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PostApi();
apiInstance.getAllpost((error, data, response) => {
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

[**[Post]**](Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamspost

> [Post] getByParamspost(attribute, value)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PostApi();
let attribute = "attribute_example"; // String | the attribute based on which the search is performed
let value = "value_example"; // String | the value parameter based on which the search is performed
apiInstance.getByParamspost(attribute, value, (error, data, response) => {
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
 **attribute** | **String**| the attribute based on which the search is performed | 
 **value** | **String**| the value parameter based on which the search is performed | 

### Return type

[**[Post]**](Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getpost

> Post getpost(postId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PostApi();
let postId = "postId_example"; // String | the Id parameter
apiInstance.getpost(postId, (error, data, response) => {
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
 **postId** | **String**| the Id parameter | 

### Return type

[**Post**](Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatepost

> Post updatepost(postId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PostApi();
let postId = "postId_example"; // String | the Id parameter
let opts = {
  'post': new TempApi.Post() // Post | data to be updated
};
apiInstance.updatepost(postId, opts, (error, data, response) => {
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
 **postId** | **String**| the Id parameter | 
 **post** | [**Post**](Post.md)| data to be updated | [optional] 

### Return type

[**Post**](Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

