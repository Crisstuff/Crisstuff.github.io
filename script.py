import os

def generate_html_from_folder(folder_path, output_html):
    # Open the output HTML file
    with open(output_html, 'w') as html_file:
        # Write the HTML header
        html_file.write("<!DOCTYPE html>\n")
        html_file.write("<html lang='en'>\n")
        html_file.write("<head>\n")
        html_file.write("    <meta charset='UTF-8'>\n")
        html_file.write("    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n")
        html_file.write("    <title>Generated HTML</title>\n")
        html_file.write("</head>\n")
        html_file.write("<body>\n")

        # Loop through each file in the folder
        for filename in os.listdir(folder_path):
            # Only process files (skip directories)
            if os.path.isfile(os.path.join(folder_path, filename)):
                # Remove the file extension to get the ID
                file_id = os.path.splitext(filename)[0]
                # Write a <div> element with the file name as the ID
                html_file.write(f"    <div id='{file_id}'>Content for {file_id}</div>\n")

        # Close the body and HTML tags
        html_file.write("</body>\n")
        html_file.write("</html>\n")

    print(f"HTML file '{output_html}' has been created with elements from '{folder_path}'.")

# Set the folder path and output HTML file name
folder_path = 'portfolio/bilder '
output_html = 'output.html'

# Generate the HTML file
generate_html_from_folder(folder_path, output_html)
