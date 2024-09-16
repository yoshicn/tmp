export const fetchRepos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Response(JSON.stringify([
        {
            "id": "3ec2e64e-57d0-4a8d-ba84-5413c95f6d58",
            "service": "Policies",
            "modelIndex": "Repository",
            "uri": "/policies/api/repositories/3ec2e64e-57d0-4a8d-ba84-5413c95f6d58",
            "parent": {
                "id": "093e6842-2e68-4499-82f2-f17e9c42ef61",
                "service": "Policies",
                "modelIndex": "Root",
                "uri": "/policies/api/roots/093e6842-2e68-4499-82f2-f17e9c42ef61",
                "childRelation": "repositories"
            },
            "createdBy": "report-publisher-team4@dummy-email.com",
            "createdOn": 1717368381467,
            "modifiedBy": "Nirmata",
            "modifiedOn": 1717368381509,
            "generation": 1,
            "ancestors": [
                {
                    "service": "Policies",
                    "modelIndex": "Root",
                    "id": "093e6842-2e68-4499-82f2-f17e9c42ef61"
                }
            ],
            "labels": {
                "test1": "value1"
            },
            "additionalProperties": {},
            "alarms": [],
            "name": "springboot_example2",
            "description": null,
            "gitUrl": "https://github.com/dtoledo/springboot_example2",
            "organization": "dtoledo",
            "gitAccount": null,
            "origin": null,
            "accessControlList": [
                {
                    "id": "de276e7e-ad7a-456f-b7e9-687d67cc4155",
                    "service": "Policies",
                    "modelIndex": "AccessControlList",
                    "uri": "/policies/api/accesscontrollists/de276e7e-ad7a-456f-b7e9-687d67cc4155"
                }
            ]
        },
        {
            "id": "3f091348-3d14-4189-b8ec-6e4865499b7c",
            "service": "Policies",
            "modelIndex": "Repository",
            "uri": "/policies/api/repositories/3f091348-3d14-4189-b8ec-6e4865499b7c",
            "parent": {
                "id": "093e6842-2e68-4499-82f2-f17e9c42ef61",
                "service": "Policies",
                "modelIndex": "Root",
                "uri": "/policies/api/roots/093e6842-2e68-4499-82f2-f17e9c42ef61",
                "childRelation": "repositories"
            },
            "createdBy": "john@nirmata.com",
            "createdOn": 1717511992108,
            "modifiedBy": "smith@nirmata.com",
            "modifiedOn": 1717717393564,
            "generation": 1,
            "ancestors": [
                {
                    "service": "Policies",
                    "modelIndex": "Root",
                    "id": "093e6842-2e68-4499-82f2-f17e9c42ef61"
                }
            ],
            "additionalProperties": {},
            "alarms": [],
            "name": "springboot_qa_1",
            "description": null,
            "gitUrl": "https://github.com/nirmata/nirmata-npm-ui-automation",
            "organization": "pns-nirmata",
            "gitAccount": null,
            "origin": null,
            "accessControlList": [
                {
                    "id": "1e63acda-7f3b-4dc4-a30a-ee98947d1d92",
                    "service": "Policies",
                    "modelIndex": "AccessControlList",
                    "uri": "/policies/api/accesscontrollists/1e63acda-7f3b-4dc4-a30a-ee98947d1d92"
                }
            ]
        },
        {
            "id": "1b771c04-fe35-49ce-8d9d-3359b164ea8c",
            "service": "Policies",
            "modelIndex": "Repository",
            "uri": "/policies/api/repositories/1b771c04-fe35-49ce-8d9d-3359b164ea8c",
            "parent": {
                "id": "093e6842-2e68-4499-82f2-f17e9c42ef61",
                "service": "Policies",
                "modelIndex": "Root",
                "uri": "/policies/api/roots/093e6842-2e68-4499-82f2-f17e9c42ef61",
                "childRelation": "repositories"
            },
            "createdBy": "sam@nirmata.com",
            "createdOn": 1717846430097,
            "modifiedBy": "sam@nirmata.com",
            "modifiedOn": 1718024379109,
            "generation": 1,
            "ancestors": [
                {
                    "service": "Policies",
                    "modelIndex": "Root",
                    "id": "093e6842-2e68-4499-82f2-f17e9c42ef61"
                }
            ],
            "additionalProperties": {},
            "alarms": [],
            "name": "test-nctl",
            "description": null,
            "gitUrl": "https://bitbucket.org/nirmata/test-nctl",
            "organization": "test",
            "gitAccount": null,
            "origin": null,
            "accessControlList": [
                {
                    "id": "e3853d19-d6aa-4402-9f1f-4d7943a9567a",
                    "service": "Policies",
                    "modelIndex": "AccessControlList",
                    "uri": "/policies/api/accesscontrollists/e3853d19-d6aa-4402-9f1f-4d7943a9567a"
                }
            ]
        },
        {
            "id": "4130027a-17dd-43d3-a9b8-182dc6386985",
            "service": "Policies",
            "modelIndex": "Repository",
            "uri": "/policies/api/repositories/4130027a-17dd-43d3-a9b8-182dc6386985",
            "parent": {
                "id": "093e6842-2e68-4499-82f2-f17e9c42ef61",
                "service": "Policies",
                "modelIndex": "Root",
                "uri": "/policies/api/roots/093e6842-2e68-4499-82f2-f17e9c42ef61",
                "childRelation": "repositories"
            },
            "createdBy": "yosh@nirmata.com",
            "createdOn": 1718054533876,
            "modifiedBy": "yosh@nirmata.com",
            "modifiedOn": 1718082361907,
            "generation": 1,
            "ancestors": [
                {
                    "service": "Policies",
                    "modelIndex": "Root",
                    "id": "093e6842-2e68-4499-82f2-f17e9c42ef61"
                }
            ],
            "additionalProperties": {},
            "alarms": [],
            "name": "nirmata-npm-ui-automation",
            "description": null,
            "gitUrl": "https://github.com/nirmata/nirmata-npm-ui-automation",
            "organization": "nirmata",
            "gitAccount": null,
            "origin": null,
            "accessControlList": [
                {
                    "id": "07ad5909-6889-4058-93ec-9979095e9317",
                    "service": "Policies",
                    "modelIndex": "AccessControlList",
                    "uri": "/policies/api/accesscontrollists/07ad5909-6889-4058-93ec-9979095e9317"
                },
                {
                    "id": "1e63acda-7f3b-4dc4-a30a-ee98947d1d92",
                    "service": "Policies",
                    "modelIndex": "AccessControlList",
                    "uri": "/policies/api/accesscontrollists/1e63acda-7f3b-4dc4-a30a-ee98947d1d92"
                }
            ]
        }
    ])))
    }, 1000);
  })
}

export const fetchAccessControls = (input: string[] = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input?.length === 0) {
        resolve(new Response(JSON.stringify([])))
      }
      else {
        resolve(new Response(JSON.stringify([
          {
              "id": "07ad5909-6889-4058-93ec-9979095e9317",
              "accessControls": [
                  {
                      "id": "f647a17e-a914-4569-b55f-6955510eb7b4"
                  }
              ]
          },
          {
              "id": "1e63acda-7f3b-4dc4-a30a-ee98947d1d92",
              "accessControls": [
                  {
                      "id": "a748d382-1830-4eb1-acad-be0844e6307c"
                  }
              ]
          },
          {
              "id": "de276e7e-ad7a-456f-b7e9-687d67cc4155",
              "accessControls": [
                  {
                      "id": "2a10a6e0-52b3-4197-8ce4-35acca294651"
                  },
                  {
                      "id": "91b55d4c-d0c6-4b5f-83f8-c86c13c99861"
                  },
                  {
                      "id": "b1f0ff1c-3789-4134-bf71-af1a2155d096"
                  },
                  {
                      "id": "acc56307-afd0-4b9c-a660-586576737f18"
                  }
              ]
          },
          {
              "id": "e3853d19-d6aa-4402-9f1f-4d7943a9567a",
              "accessControls": []
          }
      ])))
    }
    }, 1000);
  })
}

export const fetchScanDetails = (input: string[] = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input?.length === 0) {
        resolve(new Response(JSON.stringify([])))
      }
      else {
        resolve(new Response(JSON.stringify({
          "entries" : [ {
            "_id" : "https://bitbucket.org/nirmata/test-nctl",
            "lastScan" : 1717847420554,
            "resourceTypes" : [ "kubernetes" ],
            "branch" : 1,
            "files" : 1
          }, {
            "_id" : "https://github.com/nirmata/nirmata-npm-ui-automation",
            "lastScan" : 1718054552728,
            "resourceTypes" : [ "kubernetes" ],
            "branch" : 1,
            "files" : 9
          }, {
            "_id" : "https://github.com/nirmata/springboot_example2",
            "lastScan" : 1717368455399,
            "resourceTypes" : [ "kubernetes" ],
            "branch" : 1,
            "files" : 26
          }, {
            "_id" : "https://github.com/nirmata/springboot_qa_1",
            "lastScan" : 1717512021631,
            "resourceTypes" : [ "kubernetes" ],
            "branch" : 1,
            "files" : 13
          } ],
          "total" : 4
        })))
    }
    }, 1000);
  })
}
