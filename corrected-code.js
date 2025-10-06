// Corrected Code
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}

/* 
What I fixed and Why

1. Missing comma after "checkInDate". 
   Problem: "checkInDate": "2024-05-15"
            "checkOutDate": "2024-05-20",
   Objects require commas between properties.
   Fix: Added a comma after "2024-05-15",
   
2.Unquoted key name in first guest object. 
  Problem: {
            name: "Alice Johnson",
            ...
            }
  JSON requires double-quoted keys.
  Fix: Changed to "name": "Alice Johnson".

3. Invalid value undefined for Bob’s age. 
   Problem: "age": undefined
   undefined is not valid JSON. Use null if unknown (or a number).
   Fix: Set to "age": null.

4. Email missing .com for Bob. 
   Problem: "email": "bob.smith@example"
   Not a syntax error, but it’s a data issue that could trip up basic validations.
   Fix: Changed to "bob.smith@example.com".

5.Extra comma in amenities array. 
  Problem: "amenities": ["WiFi", "Breakfast", "Parking",]
  JSON does not allow trailing commas.
  Fix: Removed the trailing comma → ["WiFi", "Breakfast", "Parking"].

6.Consistent quoting for all keys and string values.
  Problem: Mixed usage (one unquoted key).
  Mixed usage makes the code harder to read, understand, and 
  edit.
  Fix: Ensured all keys and all strings use double quotes per JSON spec.
*/

/*
Follow-Up Answers

1. Tools/techniques used: Syntax highlighting, reading error messages from JSON.parse,
and a JSON linter.

2. How I confirmed validity: JSON.parse succeeded locally and the linter reported 
“valid JSON.”

3. Hardest errors: Missing commas and trailing commas—they’re small and easy to overlook.

4. Strategies to avoid errors: Use a linter, enable editor formatting, keep keys/strings
double-quoted, and validate often after small edits.
*/