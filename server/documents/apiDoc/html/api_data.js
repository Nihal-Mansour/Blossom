define({ "api": [
  {
    "type": "post",
    "url": "api/login",
    "title": "Login",
    "name": "Login_to_Blossom",
    "group": "Auth",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Required.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/login' \\\n--data-raw '{\n\t\"email\":\"nada@gmail.com\",\n\t\"password\":\"hello\"\n'}'/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "HTTP/1.1 200 OK\n{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc1YzY4Mzg3YmNlYjEwYWMzZDMzOTQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg1NjYzMzQ2LCJleHAiOjE1ODU3NDk3NDZ9.hLom36hxkDhABZEquFdKtFGEdmdxUziQx9eWVVry_3s\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/sign",
    "title": "Signup",
    "name": "Signup_to_Blossom",
    "group": "Auth",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "repeat_password",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "address[country]",
            "description": "<p>Required country</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "address[city]",
            "description": "<p>Required city.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "address[street]",
            "description": "<p>Required street.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "address[buildingNo]",
            "description": "<p>Required building number.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "address[apartmentNo]",
            "description": "<p>Required apartment number.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>Required.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/sign' \\\n--data-raw '{\n    \"name\":\"Nada\",\n    \"password\":\"hello\",\n    \"repeat_password\":\"hello\",\n    \"email\":\"nada@gmail.com\",\n    \"address\":{\n        \"country\":\"egypt\",\n        \"city\":\"giza\",\n        \"street\":\"abdelzaher\",\n        \"buildingNo\":20,\n        \"apartmentNo\":5\n    },\n    \"phone\":\"01283176585\"\n'}'/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc1YzY4Mzg3YmNlYjEwYWMzZDMzOTQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg1NjYzMzQ2LCJleHAiOjE1ODU3NDk3NDZ9.hLom36hxkDhABZEquFdKtFGEdmdxUziQx9eWVVry_3s\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/bouquets",
    "title": "Create Bouquet",
    "name": "Create_Bouquet",
    "group": "Bouquets",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Required. Name of the bouquet</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Required. The key that is returned from the upload Image request</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"BabyOrchid\"",
              "\"Cabbage\"",
              "\"Chrysanthemums\"",
              "\"Eucalyptus\"",
              "\"Gerbera\"",
              "\"Roses\"",
              "\"Lilies\"",
              "\"Spider\"",
              "\"Tulips\""
            ],
            "optional": false,
            "field": "bouquetCategory",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"I Love You\"",
              "\"I Miss You\"",
              "\"Congratulations\"",
              "\"Get Well Soon\"",
              "\"Happy Anniversary\"",
              "\"Happy Birthday\"",
              "\"I Am Sorry\"",
              "\"Thank You\"",
              "\"Wedding\""
            ],
            "optional": false,
            "field": "bouquetSentiment",
            "description": "<p>Required.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>Required info about the bouquet.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Required available count of the bouquet.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Required price of the bouquet.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/bouquets' \\\n--data-raw '{\n    \"name\":\"Tuli\",\n    \"image\":\"Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg\",\n    \"bouquetCategory\":\"Tulips\",\n    \"bouquetSentiment\":\"I Love You\",\n    \"price\":100,\n    \"count\":10,\n    \"info\":\"Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity.\"\n'}'/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "boolean"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "delete",
    "url": "api/bouquets/:id",
    "title": "Delete Bouquet",
    "name": "Delete_Bouquet",
    "group": "Bouquets",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Required. Id of the bouquet</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/bouquets/6090ae8be91a4e1150085d41' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "Boolean"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "get",
    "url": "api/bouquets",
    "title": "Get All Bouquets",
    "name": "Get_All_Bouquets",
    "group": "Bouquets",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>required the number of bouquets required in one page</p>"
          },
          {
            "group": "QueryParameters",
            "type": "Number",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>required the required page number</p>"
          },
          {
            "group": "QueryParameters",
            "type": "String",
            "allowedValues": [
              "\"BabyOrchid\"",
              "\"Cabbage\"",
              "\"Chrysanthemums\"",
              "\"Eucalyptus\"",
              "\"Gerbera\"",
              "\"Roses\"",
              "\"Lilies\"",
              "\"Spider\"",
              "\"Tulips\""
            ],
            "optional": true,
            "field": "category",
            "description": "<p>the category of the required bouquets</p>"
          },
          {
            "group": "QueryParameters",
            "type": "String",
            "allowedValues": [
              "\"I Love You\"",
              "\"I Miss You\"",
              "\"Congratulations\"",
              "\"Get Well Soon\"",
              "\"Happy Anniversary\"",
              "\"Happy Birthday\"",
              "\"I Am Sorry\"",
              "\"Thank You\"",
              "\"Wedding\""
            ],
            "optional": true,
            "field": "sentiment",
            "description": "<p>the sentiment of the required bouquets</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/bouquets?category=&sentiment=I Love you&pageSize=2&pageNumber=1' \\/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"count\": {\n            \"sold\": 0,\n            \"available\": 5\n        },\n        \"_id\": \"6090ae8be91a4e1150085d41\",\n        \"name\": \"Tulip\",\n        \"price\": 100,\n        \"info\": \"Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity.\",\n        \"bouquetCategory\": \"Tulips\",\n        \"bouquetSentiment\": \"I Love You\",\n        \"images\": \"Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg\",\n        \"__v\": 0\n    }\n]",
          "type": "Array[objects]"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "get",
    "url": "api/bouquets/:id",
    "title": "Get Bouquet By Id",
    "name": "Get_Bouquet_By_Id",
    "group": "Bouquets",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Required. Id of the bouquet</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/bouquets/6090ae8be91a4e1150085d41' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": {\n        \"sold\": 0,\n        \"available\": 10\n    },\n    \"_id\": \"6090ae8be91a4e1150085d41\",\n    \"name\": \"Tuli\",\n    \"price\": 100,\n    \"info\": \"Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity.\",\n    \"bouquetCategory\": \"Tulips\",\n    \"bouquetSentiment\": \"I Love You\",\n    \"images\": \"Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "put",
    "url": "api/bouquets/:id",
    "title": "Update Bouquet",
    "name": "Update_Bouquet",
    "group": "Bouquets",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Required. Id of the bouquet</p>"
          }
        ],
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the bouquet</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "image",
            "description": "<p>The key that is returned from the upload Image request</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"BabyOrchid\"",
              "\"Cabbage\"",
              "\"Chrysanthemums\"",
              "\"Eucalyptus\"",
              "\"Gerbera\"",
              "\"Roses\"",
              "\"Lilies\"",
              "\"Spider\"",
              "\"Tulips\""
            ],
            "optional": true,
            "field": "bouquetCategory",
            "description": ""
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"I Love You\"",
              "\"I Miss You\"",
              "\"Congratulations\"",
              "\"Get Well Soon\"",
              "\"Happy Anniversary\"",
              "\"Happy Birthday\"",
              "\"I Am Sorry\"",
              "\"Thank You\"",
              "\"Wedding\""
            ],
            "optional": true,
            "field": "bouquetSentiment",
            "description": ""
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "info",
            "description": "<p>info about the bouquet.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>available count of the bouquet.</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "price",
            "description": "<p>price of the bouquet.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request PUT 'http://localhost:3000/api/bouquets/6090ae8be91a4e1150085d41' \\\n--data-raw '{\n    \"name\":\"TuliP\",\n    \"count\":5,\n'}'/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"6090ae8be91a4e1150085d41\",\n    \"name\": \"Tulip\",\n    \"price\": 100,\n    \"count\": {\n        \"sold\": 0,\n        \"available\": 5\n    },\n    \"info\": \"Tulips are the most colorful of all spring flowers. They are also one of the easiest flowers you'll ever grow. Just plant the bulbs in fall for blossoms the following spring. There are hundreds of beautiful tulips to choose from, in enough colors, shapes, sizes and bloom times to inspire every gardener's creativity.\",\n    \"bouquetCategory\": \"Tulips\",\n    \"bouquetSentiment\": \"I Love You\",\n    \"images\": \"Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Bouquets"
  },
  {
    "type": "get",
    "url": "api/upload",
    "title": "Upload Image",
    "name": "Upload_Image",
    "group": "Images",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.1.0",
    "description": "<p style=\"color:red\">Get Presigned Url Of an Image</p> </br></br> <h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "description": "<p>Required. Type of the img jpg,png,jpeg,...</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"Bouquet\"",
              "\"Plant\""
            ],
            "optional": false,
            "field": "Type",
            "description": "<p>Required. Type of the category of the image</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/upload' \\\n--data-raw '{\n    \"ContentType\":\"jpg\",\n    \"Type\":\"Bouquet\",\n'}'/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"key\": \"Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg\",\n    \"url\": \"https://blossom-bucket.s3.amazonaws.com/Bouquet/77630c85-5038-4b80-b71f-f7158b0addc7.jpg?AWSAccessKeyId=AKIAWP5OWQE4EZK3NJG5&Content-Type=image%2Fjpg&Expires=1620011171&Signature=2f9InXJfKmGvodBsUcAOzX0C7qs%3D\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/doc.js",
    "groupTitle": "Images"
  },
  {
    "type": "put",
    "url": "api/plants/type",
    "title": "Add Type",
    "name": "Add_Type",
    "group": "Plant",
    "version": "1.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/plants/type/tree' \\",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>new type to add</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "types",
            "description": "<p>all the available types</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [\"vegetable\",\"fruit\",\"herb\",\"flower\",\"house plant\",\"tree\"]",
          "type": "String[]"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "post",
    "url": "api/plant",
    "title": "Create Plant",
    "name": "Create_Plant",
    "group": "Plant",
    "version": "1.1.0",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request POST 'http://localhost:3000/api/plant' \\\n--data-raw '{\n \"images\":\"Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg\",\n \"name\":\"SUNFLOWERS\",\n \"type\":\"flower\",\n \"price\":800,\n \"count\":{\n    \"available\":4\n },\n \"info\":\"The sunflower (Helianthus annuus) is an annual plant with a large daisy-like flower face. Its scientific name comes from the Greek words helios (“sun”) and anthos (“flower”). The flowers come in many colors (yellow, red, orange, maroon, brown), but they are commonly bright yellow with brown centers that ripen into heavy heads filled with seeds. \",\n \"tips\":[\"Find a sunny spot! Sunflowers grow best in locations with direct sunlight (6 to 8 hours per day); they require long, hot summers to flower well.\",\n         \"Choose a location with well-draining soil. It shouldn’t pool water after it rains.\",\n         \"Sunflowers aren’t picky but the soil can’t be too compact. They have long tap roots that need to stretch out; in preparing a bed, dig down 2 feet in depth and about 3 feet across.\"\n         ]\n}'",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "Object",
            "optional": true,
            "field": "count",
            "description": "<p>plant count</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "count.available",
            "description": "<p>the plants available count</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "images",
            "description": "<p>plant image</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"vegetable\"",
              "\"fruit\"",
              "\"herb\"",
              "\"flower\"",
              "\"house plant\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>plant type</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "size": "3..30",
            "optional": false,
            "field": "name",
            "description": "<p>plant name</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>plant price</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>plant information</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String[]",
            "optional": true,
            "field": "tips",
            "description": "<p>tips about planting the plants</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>created plant id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n         \"_id\": \"608fe99514f3af4878571a6a\"\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "delete",
    "url": "api/plant",
    "title": "Delete Plant",
    "name": "Delete_Plant",
    "group": "Plant",
    "version": "1.1.0",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/plant/6090040a8410d235d0097a20' \\",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of deleted plant</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n         \"_id\": \"608fe99514f3af4878571a6a\"\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "delete",
    "url": "api/plants/type",
    "title": "Delete Type",
    "name": "Delete_Type",
    "group": "Plant",
    "version": "1.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/plants/type/tree' \\",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type to be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "types",
            "description": "<p>all the available types</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [\"vegetable\",\"fruit\",\"herb\",\"flower\",\"house plant\"]",
          "type": "String[]"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "get",
    "url": "api/plant",
    "title": "Get All Plants",
    "name": "Get_All_Plants",
    "group": "Plant",
    "version": "1.1.0",
    "description": "<p>this request retruns all the plant in the database and doesn't return the plants tips.</p>",
    "permission": [
      {
        "name": "None"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/plant?pageNumber=1&pageSize=10' \\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "type": "Number",
            "optional": true,
            "field": "pageNumber",
            "defaultValue": "1",
            "description": "<p>page number</p>"
          },
          {
            "group": "QueryParameters",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "10",
            "description": "<p>max number of plants displayed in the page</p>"
          },
          {
            "group": "QueryParameters",
            "type": "Boolean",
            "optional": true,
            "field": "hasTips",
            "description": "<p>when true the tips of the plants are returned</p>"
          },
          {
            "group": "QueryParameters",
            "type": "String",
            "allowedValues": [
              "\"vegetable\"",
              "\"fruit\"",
              "\"herb\"",
              "\"flower\"",
              "\"house plant\""
            ],
            "optional": true,
            "field": "type",
            "description": "<p>plant type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "count",
            "description": "<p>plant count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.sold",
            "description": "<p>the plants sold count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.available",
            "description": "<p>the plants available count</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "images",
            "description": "<p>plant image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>plant id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"vegetable\"",
              "\"fruit\"",
              "\"herb\"",
              "\"flower\"",
              "\"house plant\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>plant type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>plant name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>plant price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>plant information</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tips",
            "description": "<p>array of strings returned if the hasTips parameter is true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"count\": {\n         \"sold\": 0,\n         \"available\": 4\n         },\n         \"images\": \"Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg\",\n         \"_id\": \"608fe3662947f108c0fcdb0c\",\n         \"name\": \"lavender\",\n         \"type\": \"herb\",\n         \"price\": 300,\n         \"info\": \"Lavender is a bushy, strong-scented perennial plant from the Mediterranean. In warmer regions, its gray to green foliage stays evergreen throughout the year, and the herb thrives in some of the toughest of garden condition. Here’s how to plant, grow, and harvest lavender in the garden.\"\n     },\n    {\n         \"count\": {\n         \"sold\": 0,\n         \"available\": 6\n         },\n         \"images\": \"Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg\",\n         \"_id\": \"608fe99514f3af4878571a6a\",\n         \"name\": \"bleeding heart\",\n         \"type\": \"flower\",\n         \"price\": 600,\n         \"info\": \"The old-fashioned bleeding heart is a favorite perennial of the shady flower garden and was called the finest hardy plant of the 19th century.\"\n     }\n\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "get",
    "url": "api/plants/type",
    "title": "Get All Types",
    "name": "Get_All_Types",
    "group": "Plant",
    "version": "1.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/plants/type' \\",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "types",
            "description": "<p>all the available types</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [\"vegetable\",\"fruit\",\"herb\",\"flower\",\"house plant\"]",
          "type": "String[]"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "get",
    "url": "api/plant/:id",
    "title": "Get Plant By Id",
    "name": "Get_Plant_By_Id",
    "group": "Plant",
    "version": "1.1.0",
    "description": "<p>this request retruns all the plant info.</p>",
    "permission": [
      {
        "name": "None"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/plant/6090043a8410d235d0097a21' \\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>plant id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "count",
            "description": "<p>plant count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.sold",
            "description": "<p>the plants sold count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.available",
            "description": "<p>the plants available count</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "images",
            "description": "<p>plant image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>plant id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>plant type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>plant name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>plant price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>plant information</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tips",
            "description": "<p>tips about planting the plants</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n         \"count\": {\n         \"sold\": 0,\n         \"available\": 6\n         },\n         \"images\": \"Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg\",\n         \"_id\": \"608fe99514f3af4878571a6a\",\n         \"name\": \"bleeding heart\",\n         \"type\": \"flower\",\n         \"price\": 600,\n         \"info\": \"The old-fashioned bleeding heart is a favorite perennial of the shady flower garden and was called the finest hardy plant of the 19th century.\"\n         \"tips\": [\n                 \"Plant in the spring after the threat of frost has passed.\",\n                 \"Plant in the shade.\",\n                 \"Add compost to the soil before planting.\",\n                 \"Soak the soil around the plant until moist.\",\n                 \"Add mulch to keep moisture in and weeds out.\"\n                 ]\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "put",
    "url": "api/plant/:id",
    "title": "Update Plant",
    "name": "Update_Plant",
    "group": "Plant",
    "version": "1.1.0",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/plant/6090043a8410d235d0097a21' \\\n--data-raw '{\n            \"price\":500\n        }'",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>plant id</p>"
          }
        ],
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "Object",
            "optional": true,
            "field": "count",
            "description": "<p>plant count</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "count.sold",
            "description": "<p>the plants sold count</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "count.available",
            "description": "<p>the plants available count</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "images",
            "description": "<p>plant image</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "allowedValues": [
              "\"vegetable\"",
              "\"fruit\"",
              "\"herb\"",
              "\"flower\"",
              "\"house plant\""
            ],
            "optional": true,
            "field": "type",
            "description": "<p>plant type</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "size": "3..30",
            "optional": true,
            "field": "name",
            "description": "<p>plant name</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "price",
            "description": "<p>plant price</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "info",
            "description": "<p>plant information</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String[]",
            "optional": true,
            "field": "tips",
            "description": "<p>tips about planting the plants</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "count",
            "description": "<p>plant count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.sold",
            "description": "<p>the plants sold count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count.available",
            "description": "<p>the plants available count</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "images",
            "description": "<p>plant image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>plant id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>plant type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>plant name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>plant price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>plant information</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tips",
            "description": "<p>tips about planting the plants</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n         \"count\": {\n         \"sold\": 0,\n         \"available\": 6\n         },\n         \"images\": \"Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg\",\n         \"_id\": \"608fe99514f3af4878571a6a\",\n         \"name\": \"bleeding heart\",\n         \"type\": \"flower\",\n         \"price\": 600,\n         \"info\": \"The old-fashioned bleeding heart is a favorite perennial of the shady flower garden and was called the finest hardy plant of the 19th century.\"\n         \"tips\": [\n             \"Plant in the spring after the threat of frost has passed.\",\n             \"Plant in the shade.\",\n             \"Add compost to the soil before planting.\",\n             \"Soak the soil around the plant until moist.\",\n             \"Add mulch to keep moisture in and weeds out.\"\n         ]\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/plants.js",
    "groupTitle": "Plant"
  },
  {
    "type": "get",
    "url": "api/users",
    "title": "Get All Users",
    "name": "Get_All_Users",
    "group": "User",
    "version": "1.1.0",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/users?pageNumber=1&pageSize=10' \\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "type": "Number",
            "optional": true,
            "field": "pageNumber",
            "defaultValue": "1",
            "description": "<p>page number</p>"
          },
          {
            "group": "QueryParameters",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "10",
            "description": "<p>max number of plants displayed in the page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>user count</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.country",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.city",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.street",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.buildingNo",
            "description": "<p>user building number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.apartmentNo",
            "description": "<p>user apartment number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxPage",
            "description": "<p>max pages available</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"users\": [\n        {\n            \"_id\": \"6089d14c3323d34078fba7d9\",\n            \"name\": \"Nada\",\n            \"email\": \"nada@gmail.com\",\n            \"address\": {\n                \"country\": \"egypt\",\n                \"city\": \"giza\",\n                \"street\": \"abdelzaher\",\n                \"buildingNo\": 20,\n                \"apartmentNo\": 5\n            },\n            \"phone\": \"01283176585\"\n        },\n        {\n            \"_id\": \"6093e0c547edeb70146b26a4\",\n            \"name\": \"Menna\",\n            \"email\": \"menna123mahmoud@gmail.com\",\n            \"address\": {\n                \"country\": \"egypt\",\n                \"city\": \"Cairo\",\n                \"street\": \"Elfostat\",\n                \"buildingNo\": \"83\",\n                \"apartmentNo\": \"43\"\n            },\n            \"phone\": \"01066761053\"\n        }\n    ],\n    \"maxPage\": 3\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/user/current",
    "title": "Get Current User",
    "name": "Get_Current_User",
    "group": "User",
    "version": "1.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/user/current' \\",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>user count</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.country",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.city",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.street",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.buildingNo",
            "description": "<p>user building number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.apartmentNo",
            "description": "<p>user apartment number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>user or admin</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Cart",
            "description": "<p>number of carts of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders",
            "description": "<p>number of items inside the cart</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n    {\n        \"_id\": \"6089d14c3323d34078fba7d9\",\n        \"name\": \"Nada\",\n        \"email\": \"nada@gmail.com\",\n        \"address\": {\n            \"country\": \"egypt\",\n            \"city\": \"giza\",\n            \"street\": \"abdelzaher\",\n            \"buildingNo\": 20,\n            \"apartmentNo\": 5\n        },\n        \"phone\": \"01283176585\",\n        \"Cart\": 1,\n        \"orders\": 2,\n        \"type\": \"user\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/users/:id",
    "title": "Get User By Id",
    "name": "Get_User_By_Id",
    "group": "User",
    "version": "1.1.0",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/users/6089d14c3323d34078fba7d9' \\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>user count</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.country",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.city",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.street",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.buildingNo",
            "description": "<p>user building number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.apartmentNo",
            "description": "<p>user apartment number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Cart",
            "description": "<p>array of all user's orders</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n    {\n        \"_id\": \"6089d14c3323d34078fba7d9\",\n        \"name\": \"Nada\",\n        \"email\": \"nada@gmail.com\",\n        \"address\": {\n            \"country\": \"egypt\",\n            \"city\": \"giza\",\n            \"street\": \"abdelzaher\",\n            \"buildingNo\": 20,\n            \"apartmentNo\": 5\n        },\n        \"phone\": \"01283176585\",\n        \"Cart\": []\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "api/users",
    "title": "Update User",
    "name": "Update_User",
    "group": "User",
    "version": "1.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/users' \\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "Object",
            "optional": true,
            "field": "address",
            "description": "<p>user count</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "address.country",
            "description": "<p>user country</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "address.city",
            "description": "<p>user country</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "address.street",
            "description": "<p>user country</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "address.buildingNo",
            "description": "<p>user building number</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": true,
            "field": "address.apartmentNo",
            "description": "<p>user apartment number</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>user phone number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>user count</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.country",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.city",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.street",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.buildingNo",
            "description": "<p>user building number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.apartmentNo",
            "description": "<p>user apartment number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "creditCard",
            "description": "<p>credit card info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"creditCard\": {\n        \"cardNumber\": 0,\n        \"ccNumber\": 0,\n        \"expireDate\": null\n    },\n    \"_id\": \"608d666e7ff51820a8cb248d\",\n    \"name\": \"hager\",\n    \"email\": \"hager@gmail.com\",\n    \"password\": \"$2b$10$/bD5c6Y/jT35zBvDtIXZAOInn8X8aCT9k24FzcurgpB4uFOUHdEka\",\n    \"address\": {\n        \"country\": \"alexandria\",\n        \"city\": \"aboer\",\n        \"street\": \"seastreet\",\n        \"buildingNo\": 5,\n        \"apartmentNo\": 6\n    },\n    \"phone\": \"01165655744\",\n    \"Cart\": [],\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/cart/orders",
    "title": "Add Item",
    "name": "add_item_to_cart",
    "group": "User",
    "version": "1.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "     curl --location --request POST 'http://localhost:3000/api/users/cart/orders' \\\n--data-raw '{\n  \"bouquetId\":\"608fe3662947f108c0fcdb0c\",\n  \"amount\":1,\n  \"orderType\":\"plant\",\n  \"category\":\"flower\"\n}",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "bouquetId",
            "description": "<p>item id</p>"
          },
          {
            "group": "BodyParameters",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>item amount</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "orderType",
            "description": "<p>item type (plant or bouquetId)</p>"
          },
          {
            "group": "BodyParameters",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>item category</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>when 0 the amount is too large on the requst if 1 the request succeded</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"cartID\": \"609c100297a5162a543d22af\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 0,\n \"count\": 9\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/cart/orders/:itemid",
    "title": "Delete Item",
    "name": "delete_item_from_current_cart",
    "group": "User",
    "version": "1.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/users/cart/orders/608ff1141485280f2c7ba5bb' \\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "itemid",
            "description": "<p>item (boquet/plant to remove) id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"609c49726d4c4e2a789f6e32\",\n    \"orders\": {\n        \"6093f1545604aa1b3c911672\": {\n            \"amount\": 2,\n            \"orderType\": \"bouquet\",\n            \"category\": \"Tulips\"\n        },\n        \"6090043a8410d235d0097a21\": {\n            \"amount\": 3,\n            \"orderType\": \"plant\",\n            \"category\": \"herb\"\n        }\n    },\n    \"status\": \"pending\",\n    \"address\": {\n        \"country\": \"alex\",\n        \"city\": \"cairo\",\n        \"street\": \"aboear\",\n        \"buildingNo\": 5,\n        \"apartmentNo\": 3\n    },\n    \"lastEdit\": \"2021-05-12T21:34:05.817Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "api/users/:id",
    "title": "Delete User",
    "name": "delete_user",
    "group": "User",
    "version": "1.1.0",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/users/608d666e7ff51820a8cb248d'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>user count</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.country",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.city",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.street",
            "description": "<p>user country</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.buildingNo",
            "description": "<p>user building number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.apartmentNo",
            "description": "<p>user apartment number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>user phone number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n    {\n        \"_id\": \"6089d14c3323d34078fba7d9\",\n        \"name\": \"Nada\",\n        \"email\": \"nada@gmail.com\",\n        \"address\": {\n            \"country\": \"egypt\",\n            \"city\": \"giza\",\n            \"street\": \"abdelzaher\",\n            \"buildingNo\": 20,\n            \"apartmentNo\": 5\n        },\n        \"phone\": \"01283176585\"\n    },\n    {\n        \"_id\": \"608d666e7ff51820a8cb248d\",\n        \"name\": \"hager\",\n        \"email\": \"hager@gmail.com\",\n        \"address\": {\n            \"country\": \"alexandria\",\n            \"city\": \"aboer\",\n            \"street\": \"seastreet\",\n            \"buildingNo\": 5,\n            \"apartmentNo\": 6\n        },\n        \"phone\": \"01165655744\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/cart/orders/",
    "title": "Get Order Items",
    "name": "get_order_items_of_the_current_cart",
    "group": "User",
    "version": "1.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request POST 'http://localhost:3000/api/users/cart/orders' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"6090043a8410d235d0097a21\": {\n        \"amount\": 18,\n        \"orderType\": \"plant\",\n        \"category\": \"herb\",\n        \"name\": \"sunflower\",\n        \"images\": \"Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg\",\n        \"price\": 1000,\n        \"count\": {\n            \"sold\": 0,\n            \"available\": 0\n        }\n    },\n    \"608fe99514f3af4878571a6a\": {\n        \"amount\": 4,\n        \"orderType\": \"plant\",\n        \"category\": \"herb\",\n        \"name\": \"bleeding heart\",\n        \"images\": \"Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg\",\n        \"price\": 600,\n        \"count\": {\n            \"sold\": 0,\n            \"available\": 2\n        }\n    },\n    \"6093f1545604aa1b3c911672\": {\n        \"amount\": 1,\n        \"orderType\": \"bouquet\",\n        \"category\": \"Tulips\",\n        \"name\": \"Tuli\",\n        \"images\": \"Plant/e5f2a7a5-061f-492f-8e98-27d049cc9bf6.jpg\",\n        \"price\": 100,\n        \"count\": {\n            \"sold\": 0,\n            \"available\": 1\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/apiDoc/code/user.js",
    "groupTitle": "User"
  }
] });
