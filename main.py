radio.set_group(69)
def parse_packet(packet_string: str):
 # TODO: Split packet by delimiter
 # Use: packet_string.split("|")
    parts = packet_string.split("|")
 # TODO: Check if packet has expected number of parts
 # How many parts are there?
    if len(parts) != 4:
        return {
        "ok": False,
        "field1": "",
        "field2": "",
        "field3": "",
        "field4": ""
        }
    # TODO: Extract each component (give them meaningful names)
    field1 = "" + parts[0]
    field2 = "" + parts[1]
    field3 = "" + parts[2]
    field4 = "" + parts[3]
    # TODO: Return components (as dictionary or individual values)
    return {
        "ok": True,
        "field1": field1,
        "field2": field2,
        "field3": field3,
        "field4": field4
        }
def on_received_string(receivedString: str):
    # TODO: Parse packet
    packet = parse_packet(receivedString)
    if not packet["ok"]:
        return
 # TODO: Display each component on serial
    serial.write_line("=== PACKET ===")
    serial.write_line("Type: " + packet["field1"])
    serial.write_line("Sequence: " + packet["field2"])
    serial.write_line("Payload: " + packet["field3"])
    serial.write_line("Checksum: " + packet["field4"])
    serial.write_line("")

while True:
    radio.on_received_string(on_received_string)
    basic.show_string("PARSE")