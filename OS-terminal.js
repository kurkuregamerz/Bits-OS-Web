async function fetch_os_data(asked_data){
    try {
        const fetched_os_data = await fetch("OS-info.json");
        if (!fetched_os_data.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const parsed_os_data = await fetch_os_data.json()
        return parsed_os_data.asked_data
    } catch (error){
        console.log("Error: " + error)
    }

}
fetch_os_data
    
    console.log("  _________                   ________          ___________        _______   ");
    console.log(" |    _    \\   ___   ___     /  _____|         /  _______  \\      /  _____|       ");
    console.log(" |   | \\    |  |_|   | |    /  /              /  /       \\  \\    /  /  ");
    console.log(" |   |_/   /   ___ __|_|___ \\  \\_____        /  /         \\  \\   \\  \\_____  ");
    console.log(" |    _   |    | | |__ ___|  \\_____  \\      |  |           |  |   \\_____  \\  ");
    console.log(" |   | \\   \\   | |   | |           \\  \\      \\  \\         /  /          \\  \\        ");
    console.log(" |   |_/    |  | |   | |____  _____/  /       \\  \\_______/  /      _____/  /             ");
    console.log(" |_________/   |_|   |_____| |_______/         \\___________/      |_______/ ");
    console.log("____________________________________________________________________________________ ");
    console.log("| ################################################################################ | ");
    console.log("| ################################################################################ | ");
    console.log("| ###########################\x1b[38;02;200;60;0mhB\x1b[0m#######\x1b[38;02;200;60;0mWh8\x1b[0m######\x1b[38;02;200;60;0m8hW\x1b[0m######\x1b[38;02;200;60;0mBa\x1b[0m######################## | ");
    console.log("| ##########################\x1b[38;02;200;60;0mhuXY\x1b[0m#####\x1b[38;02;200;60;0m8jXt\x1b[0m######\x1b[38;02;200;60;0mtXj8\x1b[0m#####\x1b[38;02;200;60;0mcXuk\x1b[0m###################### | ");
    console.log("| #######################\x1b[38;02;200;60;0mxzzccXczzvzzzcXczzcczzcXcczzvzzcXzxxxj\x1b[0m################### | ");
    console.log("| #######################\x1b[38;02;200;60;0mxvuXXXXzzvXXXXXXXXzczXXXXXzzcXXXXXXXXfwq%\x1b[0m################# | ");
    console.log("| #######################\x1b[38;02;200;60;0mqwLcXXXczzXXXXXXXXXzzzXXXzzzzXXXXXXXXuuuk\x1b[0m################ | ");
    console.log("| #######################\x1b[38;02;200;60;0mrXXXXXXXXvXXXczcXXzzXXXXXXXXcXXczcXXXf@\x1b[0m################## | ");
    console.log("| #######################\x1b[38;02;200;60;0mrzzzcXczzvzzzzYzzzcczzcXczzzvzzzXzzzzf\x1b[0m################### | ");
    console.log("| #####################\x1b[38;02;200;60;0m*atXXXczzXXcXzXXXXXzzzXXzXcXXXczXXXXXzXj\x1b[0m################### | ");
    console.log("| ####################\x1b[38;02;200;60;0mbnzvXXXXXXXXXzXcXXXcXcXXXXXXXXXcXvXXXcJOp\x1b[0m################### | ");
    console.log("| ######################\x1b[38;02;200;60;0matXXXczzXXcXzXXXXXzzzXXzzcXXXcXXXXXXXXr\x1b[0m################### | ");
    console.log("| #######################\x1b[38;02;200;60;0mfzzzzXczzvzzzzXczzcczzcXczzzvzzcXzzzzf\x1b[0m################### | ");
    console.log("| #######################\x1b[38;02;200;60;0mfXXXXXXXXcXXXczzXXzzXXXXXXXXcXXzzcXXXtM8\x1b[0m################# | ");
    console.log("| #######################\x1b[38;02;200;60;0mpZCcXXXczzXXXXXXXXXczcXXXczzXXXXXXXXXvcnb\x1b[0m################ | ");
    console.log("| #######################\x1b[38;02;200;60;0mfzcXXXXXzvXXXczzXXzzzXXXXXzzcXXzzzXXX/kk\x1b[0m################# | ");
    console.log("| #######################\x1b[38;02;200;60;0mtzzzzXzzzvzzzcXczzcczzzXzzzzvzzcXczzzf\x1b[0m################### | ");
    console.log("| #######################\x1b[38;02;200;60;0mtXXXczcXXcXXXXXXXXzzXXczvXXXcXXXXXXXXj\x1b[0m################### | ");
    console.log("| ####################\x1b[38;02;200;60;0mauxnXXXXXXXXzzzzXXXzzzXXXXXXXXXczcXXXcCwm\x1b[0m################### | ");
    console.log("| ####################\x1b[38;02;200;60;0m8wZfXXXuuzXXczzXXXXzXzzXXccvXXXvzzXXXXvux\x1b[0m################### | ");
    console.log("| ########################\x1b[38;02;200;60;0m/vuvvkjuuxvvvzXcvvunuuf8rvuunvvcXzvvvf\x1b[0m################## | ");
    console.log("| ####################################\x1b[38;02;200;60;0m*b&\x1b[0m###############\x1b[38;02;200;60;0m%bh\x1b[0m######################## | ");
    console.log("| ################################################################################ | ");
    console.log("| ################################################################################ | ");
    console.log("------------------------------------------------------------------------------------ ");
    console.log("OS Version: ");
    console.log(fetch_os_data("os_version"));
    console.log(" ");
    console.log(">Welcome to Bits OS. Experince functionality with freedom with us.                                   ");
    
