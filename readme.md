## P3 Developer Test (Data Pipeline)

### Prerequisites
- Admin access to any Shopify store
    - Store should have a few test products set up
- `ngrok` (or any other tunnel tool) installed and set up on your machine
    - ex. if using `ngrok`, it should also be connected to an account (free is fine)

### Setup
1. Run `server.js`
    1. In its initial state, this spins up a local server at `localhost:3000`, with a `/webhook` endpoint that will log any payload you send to it.
1. Create a tunnel to `localhost:3000`
    1. You have now publicly exposed the server
1. Add the tunnel URL to the "Cart update" webhook notification in Shopify

### Task
1. Transform the data to match `output.xml`
    1. All data should come from the Shopify response, with the exception of the `Customer` node, which should come from https://api.sampleapis.com/futurama/characters (can be any character)

### Success Criteria
1. Log matching xml to the console