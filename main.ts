radio.setGroup(69)
function parse_packet(packet_string: string) {
    //  TODO: Split packet by delimiter
    //  Use: packet_string.split("|")
    let parts = _py.py_string_split(packet_string, "|")
    //  TODO: Check if packet has expected number of parts
    //  How many parts are there?
    if (parts.length != 4) {
        return {
            "ok" : false,
            "field1" : "",
            "field2" : "",
            "field3" : "",
            "field4" : "",
        }
    }
    
    //  TODO: Extract each component (give them meaningful names)
    let field1 = "" + parts[0]
    let field2 = "" + parts[1]
    let field3 = "" + parts[2]
    let field4 = "" + parts[3]
    //  TODO: Return components (as dictionary or individual values)
    return {
        "ok" : true,
        "field1" : field1,
        "field2" : field2,
        "field3" : field3,
        "field4" : field4,
    }
}

while (true) {
    radio.onReceivedString(function on_received_string(receivedString: string) {
        let packet: any;
        //  TODO: Parse packet
        packet = parse_packet(receivedString)
        if (!packet["ok"]) {
            return
        }
        
        //  TODO: Display each component on serial
        serial.writeLine("=== PACKET ===")
        serial.writeLine("Type: " + packet["field1"])
        serial.writeLine("Sequence: " + packet["field2"])
        serial.writeLine("Payload: " + packet["field3"])
        serial.writeLine("Checksum: " + packet["field4"])
        serial.writeLine("")
    })
    basic.showString("PARSE")
}
