import * as fcl from "@onflow/fcl"
import {send as grpcSend} from "@onflow/transport-grpc"

fcl.config()
  // Point App at Emulator
  .put("accessNode.api", "http://localhost:8080") 
  // Point FCL at dev-wallet (default port)
  .put("discovery.wallet", "http://localhost:8701/fcl/authn") 
  .put("sdk.transport", grpcSend)
