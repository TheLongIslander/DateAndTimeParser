Date-Time Parser:

The Date-Time Group Parser is a Node.js based application intended to parse strings representing date-time groups in the format YYYYMMDDTHHMMSS and convert them to a more human-readable and friendly format, specifically according to commonly used conventions in the United States.



Features:

- Parses date-time group strings into JavaScript Date objects.
- Formats Date objects into user-friendly strings, including hours, minutes, and seconds.
- Validates input strings for correct formatting and date-time existence.
- Operates in a loop, continuously accepting input until the user exits.
- Includes Jasmine test cases covering a wide range of valid and invalid scenarios.



Usage:

With Node.js and NPM installed on the system, execute the program with command -

"node dateTimeGroup.js"

within your systems terminal or console.

Once prompted, enter a date-time group string. The program will output the formatted date-time and wait for the next input. To exit, use Ctrl/Command + C.

