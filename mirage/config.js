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

  this.get('/menu-sections', (schema, request) => {
    console.log(request);
    return {
      "data": [{
        "type": "menu-section",
        "id": "0",
        "attributes": {
          "name": "Featured"
        },
        "relationships": {
          "menu-groups": {
            "data": [
              {
                "type": "menu-group",
                "id": "0-00"
              }
            ]
          }
        }
      }, {
        "type": "menu-section",
        "id": "1",
        "attributes": {
          "name": "Services"
        },
        "relationships": {
          "menu-groups": {
            "data": [
              {
                "type": "menu-group",
                "id": "1-00"
              }, {
                "type": "menu-group",
                "id": "1-01"
              }/*, {
                "type": "menu-group",
                "id": "1-02"
              }*/
            ]
          }
        }
      }/*, {
        "type": "menu-section",
        "id": "2",
        "attributes": {
          "name": "Packages"
        },
        "relationships": {
          "menu-groups": {
            "data": [
              {
                "type": "menu-group",
                "id": "2-00"
              }, {
                "type": "menu-group",
                "id": "2-01"
              }
            ]
          }
        }
      }, {
        "type": "menu-section",
        "id": "3",
        "attributes": {
          "name": "Series"
        },
        "relationships": {
          "menu-groups": {
            "data": [
              {
                "type": "menu-group",
                "id": "3-00"
              }, {
                "type": "menu-group",
                "id": "3-01"
              }
            ]
          }
        }
      }*/],
      "included": [{
        "type": "menu-group",
        "id": "0-00",
        "attributes": {
          "name": "Default",
          "position": 0
        },
        "relationships": {
          "menu-section": {
            "data": [
              {
                "type": "menu-section",
                "id": "0"
              }
            ]
          },
          "menu-group-items": {
            "data": [
              {
                "type": "menu-group-item",
                "id": "0-00-001"
              }, {
                "type": "menu-group-item",
                "id": "0-00-002"
              }, {
                "type": "menu-group-item",
                "id": "0-00-003"
              }, {
                "type": "menu-group-item",
                "id": "0-00-004"
              }
            ]}
          }
      }, {
        "type": "menu-group",
        "id": "1-00",
        "attributes": {
          "name": "Default",
          "position": 0
        },
        "relationships": {
          "menu-section": {
            "data": [
              {
                "type": "menu-section",
                "id": "1"
              }
            ]
          },
          "menu-group-items": {
            "data": []
          }
        }
      }, {
        "type": "menu-group",
        "id": "1-01",
        "attributes": {
          "name": "Massage",
          "position": 1
        },
        "relationships": {
          "menu-section": {
            "data": [
              {
                "type": "menu-section",
                "id": "1"
              }
            ]
          },
          "menu-group-items": {
            "data": [{
              "type": "menu-group-item",
              "id": "1-01-001"
            }, {
              "type": "menu-group-item",
              "id": "1-01-002"
            }, {
              "type": "menu-group-item",
              "id": "1-01-003"
            }]
          }
        }
      }
      /*, {s
        "type": "menu-group",
        "id": "1-02",
        "attributes": {
          "name": "Tanning",
          "position": 2
        },
        "relationships": {
          "menu-section": {
            "data": [
              {
                "type": "menu-section",
                "id": "1"
              }
            ]
          },
          "menu-group-items": {
            "data": [{
              "type": "menu-group-item",
              "id": "1-02-001"
            }, {
              "type": "menu-group-item",
              "id": "1-02-002"
            }]
          }
        }
      }, {
        "type": "menu-group",
        "id": "2-00",
        "attributes": {
          "name": "Default",
          "position": 0
        },
        "relationships": {
          "menu-section": {
            "data": [
              {
                "type": "menu-section",
                "id": "2"
              }
            ]
          },
          "menu-group-items": {
            "data": []
          }
        }
      }, {
        "type": "menu-group",
        "id": "2-01",
        "attributes": {
          "name": "Massage",
          "position": 1
        },
        "relationships": {
          "menu-section": {
            "data": [
              {
                "type": "menu-section",
                "id": "2"
              }
            ]
          },
          "menu-group-items": {
            "data": [{
              "type": "menu-group-item",
              "id": "2-01-001"
            }, {
              "type": "menu-group-item",
              "id": "2-01-002"
            }]
          }
        }
      }, {
        "type": "menu-group",
        "id": "3-00",
        "attributes": {
          "name": "Default",
          "position": 0
        },
        "relationships": {
          "menu-section": {
            "data": [
              {
                "type": "menu-section",
                "id": "3"
              }
            ]
          },
          "menu-group-items": {
            "data": []
          }
        }
      }, {
        "type": "menu-group",
        "id": "3-01",
        "attributes": {
          "name": "Massage",
          "position": 1
        },
        "relationships": {
          "menu-section": {
            "data": [
              {
                "type": "menu-section",
                "id": "3"
              }
            ]
          },
          "menu-group-items": {
            "data": [{
              "type": "menu-group-item",
              "id": "3-01-001"
            }, {
              "type": "menu-group-item",
              "id": "3-01-002"
            }]
          }
        }
      }
      */, {
        "type": "menu-group-item",
        "id": "0-00-001",
        "attributes": {
          "position": 1
        },
        "relationships": {
          "menu-group": {
            "data": {
              "type": "menu-group",
              "id": "0-00"
            }
          },
          "menu-item": {
            "data": {
              "type": "menu-item-service",
              "id": "0-00-001-misvc"
            }
          }
        }
      }, {
        "type": "menu-item-service",
        "id": "0-00-001-misvc",
        "attributes": {
          "name": "Service Item 0-00-001-svc In Featured Section's Default Group",
          "duration": "90 min"
        },
        "relationships": {
          "menu-group-item": {
            "data": {
              "type": "menu-group-item",
              "id": "0-00-001"
            }
          },
          "service": {
            "data": {
              "type": "service",
              "id": "svc-001"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "0-00-002",
        "attributes": {
          "position": 2
        },
        "relationships": {
          "menu-group": {
            "data": {
              "type": "menu-group",
              "id": "0-00"
            }
          },
          "menu-item": {
            "data": {
              "type": "menu-item-package",
              "id": "0-00-002-mipkg"
            }
          }
        }
      }, {
        "type": "menu-item-package",
        "id": "0-00-002-mipkg",
        "attributes": {
          "name": "Package Item 0-00-001-pkg In Featured Section's Default Group",
          "mumber-of-items": "3"
        },
        "relationships": {
          "menu-group-item": {
            "data": {
              "type": "menu-group-item",
              "id": "0-00-002"
            }
          },
          "package": {
            "data": {
              "type": "package",
              "id": "pkg-001"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "0-00-003",
        "attributes": {
          "position": 3
        },
        "relationships": {
          "menu-group": {
            "data": {
              "type": "menu-group",
              "id": "0-00"
            }
          },
          "menu-item": {
            "data": {
              "type": "menu-item-series",
              "id": "0-00-003-misrs"
            }
          }
        }
      }, {
        "type": "menu-item-series",
        "id": "0-00-003-misrs",
        "attributes": {
          "name": "Series Item 0-00-001-srs In Featured Section's Default Group",
          "quantity": "10"
        },
        "relationships": {
          "menu-group-item": {
            "data": {
              "type": "menu-group-item",
              "id": "0-00-003"
            }
          },
          "series": {
            "data": {
              "type": "series",
              "id": "srs-001"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "0-00-004",
        "attributes": {
          "position": 4
        },
        "relationships": {
          "menu-group": {
            "data": {
              "type": "menu-group",
              "id": "0-00"
            }
          },
          "menu-item": {
            "data": {
              "type": "menu-item-service",
              "id": "0-00-004-misvc"
            }
          }
        }
      }, {
        "type": "menu-item-service",
        "id": "0-00-004-misvc",
        "attributes": {
          "name": "Service Item svc-002 In Featured Section's Default Group",
          "duration": "60 min"
        },
        "relationships": {
          "menu-group-item": {
            "data": {
              "type": "menu-group-item",
              "id": "0-00-004"
            }
          },
          "service": {
            "data": {
              "type": "service",
              "id": "svc-002"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "1-01-001",
        "attributes": {
          "position": 1
        },
        "relationships": {
          "menu-group": {
            "data": {
              "type": "menu-group",
              "id": "1-01"
            }
          },
          "menu-item": {
            "data": {
              "type": "menu-item-service",
              "id": "1-01-001-misvc"
            }
          }
        }
      }, {
        "type": "menu-item-service",
        "id": "1-01-001-misvc",
        "attributes": {
          "name": "Service Item svc-001 In Services Section's Massage Group",
          "duration": "90 min"
        },
        "relationships": {
          "menu-group-item": {
            "data": {
              "type": "menu-group-item",
              "id": "1-01-001"
            }
          },
          "service": {
            "data": {
              "type": "service",
              "id": "svc-001"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "1-01-002",
        "attributes": {
          "position": 2
        },
        "relationships": {
          "menu-group": {
            "data": {
              "type": "menu-group",
              "id": "1-01"
            }
          },
          "menu-item": {
            "data": {
              "type": "menu-item-service",
              "id": "1-01-002-misvc"
            }
          }
        }
      }, {
        "type": "menu-item-service",
        "id": "1-01-002-misvc",
        "attributes": {
          "name": "Service Item svc-002 In Services Section's Massage Group",
          "duration": "60 min"
        },
        "relationships": {
          "menu-group-item": {
            "data": {
              "type": "menu-group-item",
              "id": "1-01-002"
            }
          },
          "service": {
            "data": {
              "type": "service",
              "id": "svc-002"
            }
          }
        }
      }, {
        "type": "menu-group-item",
        "id": "1-01-003",
        "attributes": {
          "position": 3
        },
        "relationships": {
          "menu-group": {
            "data": {
              "type": "menu-group",
              "id": "1-01"
            }
          },
          "menu-item": {
            "data": {
              "type": "menu-item-service",
              "id": "1-01-003-misvc"
            }
          }
        }
      }, {
        "type": "menu-item-service",
        "id": "1-01-003-misvc",
        "attributes": {
          "name": "Service Item svc-003 In Services Section's Massage Group",
          "duration": "30 min"
        },
        "relationships": {
          "menu-group-item": {
            "data": {
              "type": "menu-group-item",
              "id": "1-01-003"
            }
          },
          "service": {
            "data": {
              "type": "service",
              "id": "svc-003"
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
