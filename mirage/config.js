export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/menu-groups', (schema, request) => {
    console.log(request);
    return {
      "data": [{
        "type": "menu-group",
        "id": "123",
        "attributes": {
          "name": "Featured",
          "position": 1
        },
        "relationships": {
          "menu-group-items": {
            "data": [
              {
                "type": "menu-group-item",
                "id": "123123"
              }, {
                "type": "menu-group-item",
                "id": "123456"
              }, {
                "type": "menu-group-item",
                "id": "123789"
              }
            ]
          }
        }
      }, {
        "type": "menu-group",
        "id": "456",
        "attributes": {
          "name": "Massage",
          "position": 2
        },
        "relationships": {
          "menu-group-items": {
            "data": [
              {
                "type": "menu-group-item",
                "id": "456123"
              }, {
                "type": "menu-group-item",
                "id": "456456"
              }, {
                "type": "menu-group-item",
                "id": "456789"
              }
            ]
          }
        }
      }, {
        "type": "menu-group",
        "id": "789",
        "attributes": {
          "name": "Tanning",
          "position": 3
        },
        "relationships": {
          "menu-group-items": {
            "data": [
              {
                "type": "menu-group-item",
                "id": "789123"
              }, {
                "type": "menu-group-item",
                "id": "789456"
              }, {
                "type": "menu-group-item",
                "id": "789789"
              }, {
                "type": "menu-group-item",
                "id": "999999"
              }
            ]
          }
        }
      }],
      "included": [{
        "type": "menu-group-item",
        "id": "123123",
        "attributes": {
          "position": 1
        },
        "relationships": {
          "menu-item": {
            "data": {
              "type": "menu-item-service",
              "id": "abcabc"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "123456",
        "attributes": {
          "position": 2
        },
        "relationships": {
          "menu-item": {
            "data": {
              "type": "menu-item-package",
              "id": "abcdef"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "123789",
        "attributes": {
          "position": 3
        },
        "relationships": {
          "menu-item": {
            "data": {
              "type": "menu-item-series",
              "id": "abcghi"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "456123",
        "attributes": {
          "position": 1
        },
        "relationships": {
          "menu-item": {
            "data": {
              "type": "menu-item-service",
              "id": "defabc"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "456456",
        "attributes": {
          "position": 2
        },
        "relationships": {
          "menu-item": {
            "data": {
              "type": "menu-item-package",
              "id": "defdef"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "456789",
        "attributes": {
          "position": 3
        },
        "relationships": {
          "menu-item": {
            "data": {
              "type": "menu-item-series",
              "id": "defghi"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "789123",
        "attributes": {
          "position": 1
        },
        "relationships": {
          "menu-item": {
            "data": {
              "type": "menu-item-service",
              "id": "ghiabc"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "789456",
        "attributes": {
          "position": 2
        },
        "relationships": {
          "menu-item": {
            "data": {
              "type": "menu-item-package",
              "id": "ghidef"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "789789",
        "attributes": {
          "position": 3
        },
        "relationships": {
          "menu-item": {
            "data": {
              "type": "menu-item-series",
              "id": "ghighi"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "999999",
        "attributes": {
          "position": 4
        },
        "relationships": {
          "menu-item": {
            "data": {
              "type": "menu-item-service",
              "id": "abcabc"
            }
          }
        }
      }, {
        "type": "menu-item-service",
        "id": "abcabc",
        "attributes": {
          "name": "Service Item"
        },
        "relationships": {
          "service": {
            "data": {
              "type": "service",
              "id": "ABCABC"
            }
          }
        }
      }, {
        "type": "menu-item-package",
        "id": "abcdef",
        "attributes": {
          "name": "Package Item"
        },
        "relationships": {
          "package": {
            "data": {
              "type": "package",
              "id": "ABCDEF"
            }
          }
        }
      }, {
        "type": "menu-item-series",
        "id": "abcghi",
        "attributes": {
          "name": "Series Item"
        },
        "relationships": {
          "series": {
            "data": {
              "type": "series",
              "id": "ABCGHI"
            }
          }
        }
      }, {
        "type": "menu-item-service",
        "id": "defabc",
        "attributes": {
          "name": "Service Item"
        },
        "relationships": {
          "service": {
            "data": {
              "type": "service",
              "id": "DEFABC"
            }
          }
        }
      }, {
        "type": "menu-item-package",
        "id": "defdef",
        "attributes": {
          "name": "Package Item"
        },
        "relationships": {
          "package": {
            "data": {
              "type": "package",
              "id": "DEFDEF"
            }
          }
        }
      }, {
        "type": "menu-item-series",
        "id": "defghi",
        "attributes": {
          "name": "Series Item"
        },
        "relationships": {
          "series": {
            "data": {
              "type": "series",
              "id": "DEFGHI"
            }
          }
        }
      }, {
        "type": "menu-item-service",
        "id": "ghiabc",
        "attributes": {
          "name": "Service Item"
        },
        "relationships": {
          "service": {
            "data": {
              "type": "service",
              "id": "GHIABC"
            }
          }
        }
      }, {
        "type": "menu-item-package",
        "id": "ghidef",
        "attributes": {
          "name": "Package Item"
        },
        "relationships": {
          "package": {
            "data": {
              "type": "package",
              "id": "GHIDEF"
            }
          }
        }
      }, {
        "type": "menu-item-series",
        "id": "ghighi",
        "attributes": {
          "name": "Series Item"
        },
        "relationships": {
          "series": {
            "data": {
              "type": "series",
              "id": "GHIGHI"
            }
          }
        }
      }]
    };
  });

  this.patch('/menu-groups', (schema, request) => {

    console.log(request);

    return {};
  });

  this.patch('/menu-group-items', (schema, request) => {

    console.log(request);

    return {
      "data": {
        "type": "menu-group-item",
        "id": "111111",
        "attributes": {
          "name": "",
          "position": 1
        }
      }
    };
  });

  this.get('/services/:service_id', (schema, request) => {
    let serviceId = request.params.service_id;

    console.log(request);

    return {
      "data": {
        "type": "service",
        "id": `${serviceId}`,
        "attributes": {
          "duration": "30 min",
          "name": `Service ${serviceId}`
        }
      }
    };
  });

  this.get('/packages/:package_id', (schema, request) => {
    let packageId = request.params.package_id;

    console.log(request);

    return {
      "data": {
        "type": "package",
        "id": `${packageId}`,
        "attributes": {
          "name": `Package ${packageId}`,
          "number-of-items": 3
        }
      }
    };
  });

    this.get('/series/:series_id', (schema, request) => {
    let seriesId = request.params.series_id;

    console.log(request);

    return {
      "data": {
        "type": "series",
        "id": `${seriesId}`,
        "attributes": {
          "name": `Series ${seriesId}`,
          "quantity": 10
        }
      }
    };
  });
}
