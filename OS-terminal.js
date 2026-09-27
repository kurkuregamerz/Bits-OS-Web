async function main() {
    

    if (!document.getElementById("terminal")) {
        const new_terminal = document.createElement("div");
        document.getElementById("body").append(new_terminal)
        new_terminal.setAttribute("id", "terminal")
    }
    const terminal = document.getElementById("terminal")

    async function fetch_os_data(asked_data) {
        try {
            const fetched_os_data = await fetch("OS-info.json");
            if (!fetched_os_data.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const parsed_os_data = await fetch_os_data.json()
            return parsed_os_data.asked_data
        } catch (error) {
            terminal_write("Error: " + error)
        }

    }
    
    const terminal_write = (e) => {
        let new_line = document.createElement("pre");
        terminal.append(new_line);
        new_line.innerHTML = e;
    }
    const terminal_execute_command = (e) => {
        const command = e.split(" ");
        // try {
        const called_function = command[0];

       
        command.shift();

        // } catch (error) {
            
        // }
        let command_arguments = []
        for (let index = 0; index < command.length; index++) {
            command_arguments.push(command[index]);
            
        }
     
        terminal_commands[called_function](command_arguments.join(","));
        
        terminal_input_and_read()
    }
   const terminal_commands = {
       print: terminal_write,
       

    }
    const terminal_input_and_read = () => {
        let new_line = document.createElement("pre");
        let new_input_area = document.createElement("input");
        new_input_area.setAttribute("type", "text")
        new_input_area.classList.add("terminal_input_area")
        new_line.innerHTML += ">"
        new_line.append(new_input_area)
        new_input_area.setAttribute("autofocus", "")
        
        new_input_area.focus()
        terminal.append(new_line);
        new_input_area.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                new_input_area.setAttribute("disabled", "")
                new_input_area.removeAttribute("autofocus", "")
                terminal_execute_command(new_input_area.value)

            }
            

            
        })
        console.log("done")
    }
    
    
    terminal_write(`  _________                   ________          ___________        _______   `);
    terminal_write(` |    _    \\   ___   ___     /  _____|         /  _______  \\      /  _____|       `);
    terminal_write(` |   | \\    |  |_|   | |    /  /              /  /       \\  \\    /  /  `);
    terminal_write(` |   |_/   /   ___ __|_|___ \\  \\_____        /  /         \\  \\   \\  \\_____  `);
    terminal_write(` |    _   |    | | |__ ___|  \\_____  \\      |  |           |  |   \\_____  \\  `);
    terminal_write(` |   | \\   \\   | |   | |           \\  \\      \\  \\         /  /          \\  \\        `);
    terminal_write(` |   |_/    |  | |   | |____  _____/  /       \\  \\_______/  /      _____/  /             `);
    terminal_write(` |_________/   |_|   |_____| |_______/         \\___________/      |_______/ `);
    terminal_write(`____________________________________________________________________________________ `);
    terminal_write(`| ################################################################################ | `);
    terminal_write(`| ################################################################################ | `);
    terminal_write(`| ###########################<span style="color:rgb(200,60,0)">hB</span>#######<span style="color:rgb(200,60,0)">Wh8</span>######<span style="color:rgb(200,60,0)">8hW</span>######<span style="color:rgb(200,60,0)">Ba</span>######################## | `);
    terminal_write(`| ##########################<span style="color:rgb(200,60,0)">huXY</span>#####<span style="color:rgb(200,60,0)">8jXt</span>######<span style="color:rgb(200,60,0)">tXj8</span>#####<span style="color:rgb(200,60,0)">cXuk</span>###################### | `);
    terminal_write(`| #######################<span style="color:rgb(200,60,0)">xzzccXczzvzzzcXczzcczzcXcczzvzzcXzxxxj</span>################### | `);
    terminal_write(`| #######################<span style="color:rgb(200,60,0)">xvuXXXXzzvXXXXXXXXzczXXXXXzzcXXXXXXXXfwq%</span>################ | `);
    terminal_write(`| #######################<span style="color:rgb(200,60,0)">qwLcXXXczzXXXXXXXXXzzzXXXzzzzXXXXXXXXuuuk</span>################ | `);
    terminal_write(`| #######################<span style="color:rgb(200,60,0)">rXXXXXXXXvXXXczcXXzzXXXXXXXXcXXczcXXXf@</span>################## | `);
    terminal_write(`| #######################<span style="color:rgb(200,60,0)">rzzzcXczzvzzzzYzzzcczzcXczzzvzzzXzzzzf</span>################### | `);
    terminal_write(`| #####################<span style="color:rgb(200,60,0)">*atXXXczzXXcXzXXXXXzzzXXzXcXXXczXXXXXzXj</span>################### | `);
    terminal_write(`| ####################<span style="color:rgb(200,60,0)">bnzvXXXXXXXXXzXcXXXcXcXXXXXXXXXcXvXXXcJOp</span>################### | `);
    terminal_write(`| ######################<span style="color:rgb(200,60,0)">atXXXczzXXcXzXXXXXzzzXXzzcXXXcXXXXXXXXr</span>################### | `);
    terminal_write(`| #######################<span style="color:rgb(200,60,0)">fzzzzXczzvzzzzXczzcczzcXczzzvzzcXzzzzf</span>################### | `);
    terminal_write(`| #######################<span style="color:rgb(200,60,0)">fXXXXXXXXcXXXczzXXzzXXXXXXXXcXXzzcXXXtM8</span>################# | `);
    terminal_write(`| #######################<span style="color:rgb(200,60,0)">pZCcXXXczzXXXXXXXXXczcXXXczzXXXXXXXXXvcnb</span>################ | `);
    terminal_write(`| #######################<span style="color:rgb(200,60,0)">fzcXXXXXzvXXXczzXXzzzXXXXXzzcXXzzzXXX/kk</span>################# | `);
    terminal_write(`| #######################<span style="color:rgb(200,60,0)">tzzzzXzzzvzzzcXczzcczzzXzzzzvzzcXczzzf</span>################### | `);
    terminal_write(`| #######################<span style="color:rgb(200,60,0)">tXXXczcXXcXXXXXXXXzzXXczvXXXcXXXXXXXXj</span>################### | `);
    terminal_write(`| ####################<span style="color:rgb(200,60,0)">auxnXXXXXXXXzzzzXXXzzzXXXXXXXXXczcXXXcCwm</span>################### | `);
    terminal_write(`| ####################<span style="color:rgb(200,60,0)">8wZfXXXuuzXXczzXXXXzXzzXXccvXXXvzzXXXXvux</span>################### | `);
    terminal_write(`| ########################<span style="color:rgb(200,60,0)">/vuvvkjuuxvvvzXcvvunuuf8rvuunvvcXzvvvf</span>################## | `);
    terminal_write(`| ####################################<span style="color:rgb(200,60,0)">*b&</span>###############<span style="color:rgb(200,60,0)">%bh</span>####################### | `);
    terminal_write(`| ################################################################################ | `);
    terminal_write(`| ################################################################################ | `);
    terminal_write(`------------------------------------------------------------------------------------ `);
    terminal_write(`OS Version: `);
    // terminal_write(fetch_os_data(`os_version`));
    terminal_write(` `);
    terminal_write(`>Welcome to Bits OS. Experince functionality with freedom with us.                                   `);
    terminal_input_and_read()
}

main()