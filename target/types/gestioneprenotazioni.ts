export type Gestioneprenotazioni = {
  "version": "0.1.0",
  "name": "gestioneprenotazioni",
  "instructions": [
    {
      "name": "createUtente",
      "accounts": [
        {
          "name": "utente",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nome",
          "type": "string"
        },
        {
          "name": "cognome",
          "type": "string"
        },
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "password",
          "type": "string"
        }
      ]
    },
    {
      "name": "createPostazione",
      "accounts": [
        {
          "name": "postazione",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createPrenotazione",
      "accounts": [
        {
          "name": "prenotazione",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": "u64"
        },
        {
          "name": "utente",
          "type": "publicKey"
        },
        {
          "name": "postazione",
          "type": "publicKey"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "utente",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nome",
            "type": "string"
          },
          {
            "name": "cognome",
            "type": "string"
          },
          {
            "name": "username",
            "type": "string"
          },
          {
            "name": "password",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "postazione",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "prenotazione",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "utente",
            "type": "publicKey"
          },
          {
            "name": "postazione",
            "type": "publicKey"
          },
          {
            "name": "data",
            "type": "u64"
          },
          {
            "name": "cancellata",
            "type": "bool"
          }
        ]
      }
    }
  ]
};

export const IDL: Gestioneprenotazioni = {
  "version": "0.1.0",
  "name": "gestioneprenotazioni",
  "instructions": [
    {
      "name": "createUtente",
      "accounts": [
        {
          "name": "utente",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nome",
          "type": "string"
        },
        {
          "name": "cognome",
          "type": "string"
        },
        {
          "name": "username",
          "type": "string"
        },
        {
          "name": "password",
          "type": "string"
        }
      ]
    },
    {
      "name": "createPostazione",
      "accounts": [
        {
          "name": "postazione",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createPrenotazione",
      "accounts": [
        {
          "name": "prenotazione",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": "u64"
        },
        {
          "name": "utente",
          "type": "publicKey"
        },
        {
          "name": "postazione",
          "type": "publicKey"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "utente",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nome",
            "type": "string"
          },
          {
            "name": "cognome",
            "type": "string"
          },
          {
            "name": "username",
            "type": "string"
          },
          {
            "name": "password",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "postazione",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "prenotazione",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "utente",
            "type": "publicKey"
          },
          {
            "name": "postazione",
            "type": "publicKey"
          },
          {
            "name": "data",
            "type": "u64"
          },
          {
            "name": "cancellata",
            "type": "bool"
          }
        ]
      }
    }
  ]
};
