import { Address, ethereum, log } from "@graphprotocol/graph-ts"
import {
  Approval as ApprovalEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Transfer as TransferEvent,
  Unpaused as UnpausedEvent
} from "../generated/MyToken/MyToken"
import {
  Approval,
  EIP712DomainChanged,
  OwnershipTransferred,
  Paused,
  Transfer,
  Unpaused
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEIP712DomainChanged(
  event: EIP712DomainChangedEvent
): void {
  let entity = new EIP712DomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  ethereum.hasCode(Address.fromString("0x0E86A0DEF93F3a9265be1681ce98BeBb404c44cF"))

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  // entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.balance = ethereum.getBalance(Address.fromString("0x0E86A0DEF93F3a9265be1681ce98BeBb404c44cF"))

  // log.info
  if (ethereum.hasCode(Address.fromString("0x0E86A0DEF93F3a9265be1681ce98BeBb404c44cF")) == true || ethereum.hasCode(Address.fromString("0x0E86A0DEF93F3a9265be1681ce98BeBb404c44cF")) == 1) {
    entity.contract = true
  } else {
    entity.contract = false
  }
  log.info("Contract 1: {}", [ethereum.hasCode(Address.fromString("0x06C41df2358deD2Fd891522f9Da75eca2150c10B")).toString()])
  log.info("Contract 2: {}", [ethereum.hasCode(Address.fromString("0x0E86A0DEF93F3a9265be1681ce98BeBb404c44cF")).toString()])
  log.info("Contract 3: {}", [ethereum.hasCode(Address.fromString("0x63b86660feD322fD965852c31dBde3242D65D032")).toString()])

  log.info("Contract 4: {}", [ethereum.hasCode(Address.fromString("0x06C41df2358deD2Fd891522f9Da75eca2150c10B".toLowerCase())).toString()])
  log.info("Contract 5: {}", [ethereum.hasCode(Address.fromString("0x0E86A0DEF93F3a9265be1681ce98BeBb404c44cF".toLowerCase())).toString()])
  log.info("Contract 6: {}", [ethereum.hasCode(Address.fromString("0x63b86660feD322fD965852c31dBde3242D65D032".toLowerCase())).toString()])

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
