import React, { Component } from 'react'
import { render } from 'react-dom'

import ipfsService from '../services/ipfs-service'

class DemoStep2 extends Component {
  handleSubmitToIpfs(data, onSubmitToIpfs) {
    ipfsService.submitListing(data)
    .then((ipfsHash) => {
      onSubmitToIpfs(ipfsHash)
    });
  }

  render() {
    return (
      <section className="step">
        <h4>Post your listing to the decentralized web</h4>
        <p>
          When creating your listing, we store your data as JSON.
        </p>
        <pre>{JSON.stringify(this.props.listingJson, null, 2)}</pre>
        <p>
          In traditional commerce, this JSON would be sent to 
          a centralized business like Craigslist, Airbnb, or eBay. The data 
          would then be stored in their databases.
        </p>
        <p>
          Because we want to build decentralized, trustless commerce, we need to 
          store your data in a distributed data store that isn't owned by anyone.
        </p>
        <p>
          Enter the much-heralded IPFS (Interplanetary File System). We post your
          data to hundreds of distributed nodes on the IPFS network. This ensures 
          that your listing is always available, and more importantly, is not subject 
          to the whims and arbitrary policies of a centralized business.
        </p>
        <button className="btn btn-primary" onClick={() => {
          this.handleSubmitToIpfs(this.props.listingJson, this.props.onStep2Completion)
        }}>
          Submit to ipfs
        </button>
      </section>
    );
  }
}

export default DemoStep2