initSidebarItems({"fn":[["encode_add_currency_to_account_script","Add the currency identified by the type `currency` to the sending accounts.Aborts if the account already holds a balance fo `currency` type."],["encode_add_validator_script","Encode a program adding `new_validator` to the pending validator set. Fails if the`new_validator` address is already in the validator set, already in the pending validator set,or does not have a `ValidatorConfig` resource stored at the address"],["encode_block_prologue_script",""],["encode_burn_script","Permanently destroy the coins stored in the oldest burn request under the `Preburn`resource stored at `preburn_address`. This will only succeed if the sender has a`MintCapability` stored under their account and `preburn_address` has a pending burn request"],["encode_burn_txn_fees_script","Burn transaction fees that have been collected in the given `currency`,and relinquish to the association. The currency must be non-synthetic."],["encode_cancel_burn_script","Cancel the oldest burn request from `preburn_address` and return the funds to`preburn_address`.  Fails if the sender does not have a published `MintCapability`."],["encode_create_child_vasp_account","Create an account with the ChildVASP role at `address` with authentication key`auth_key_prefix` | `new_account_address` and `initial_balance` of type `currency`transferred from the sender. If `add_all_currencies` is true, 0 balances for allavailable currencies in the system will also be added to the account. This account willbe a child of the transaction sender, which must be a ParentVASP."],["encode_create_designated_dealer","Creates designated dealer at 'new_account_address"],["encode_create_parent_vasp_account","Create an account with the ParentVASP role at `address` with authentication key`auth_key_prefix` | `new_account_address` and a 0 balance of type `currency`. If`add_all_currencies` is true, 0 balances for all available currencies in the system willalso be added. This can only be invoked by an Association account."],["encode_freeze_account","Freezes account with address addr."],["encode_mint_lbr","Mints `amount_lbr` LBR from the sending account's constituent coins and deposits theresulting LBR into the sending account."],["encode_mint_lbr_to_address_script","Encode a program creating `amount` LBR for `address`"],["encode_mint_script","Encode a program creating `amount` coins for sender"],["encode_preburn_script","Preburn `amount` coins from the sender's account. This will only succeed if the senderalready has a published `Preburn` resource."],["encode_publish_shared_ed25519_public_key_script","(1) Rotate the authentication key of the sender to `public_key`(2) Publish a resource containing a 32-byte ed25519 public key and the rotation capabilityof the sender under the sender's address.Aborts if the sender already has a `SharedEd25519PublicKey` resource.Aborts if the length of `new_public_key` is not 32."],["encode_publishing_option_script",""],["encode_register_preburner_script","Publish a newly created `Preburn` resource under the sender's account.This will fail if the sender already has a published `Preburn` resource."],["encode_register_validator_script","Encode a program registering the sender as a candidate validator with the given key information.`network_identity_pubkey` should be a X25519 public key`consensus_pubkey` should be a Ed25519 public c=key."],["encode_remove_validator_script","Encode a program adding `to_remove` to the set of pending validator removals. Fails ifthe `to_remove` address is already in the validator set or already in the pending removals."],["encode_rotate_authentication_key_script_with_nonce","Encode a program that rotates the sender's authentication key to `new_key`. `new_key`should be a 256 bit sha3 hash of an ed25519 public key. This script also takes nonce"],["encode_rotate_base_url_script","Encode a program that rotates `vasp_root_addr`'s base URL to `new_url`."],["encode_rotate_compliance_public_key_script","Encode a program that rotates `vasp_root_addr`'s compliance public key to `new_key`."],["encode_rotate_consensus_pubkey_script","Encode a program that rotates the sender's consensus public key to `new_key`."],["encode_rotate_shared_ed25519_public_key_script","(1) rotate the public key stored in the sender's `SharedEd25519PublicKey` resource to`new_public_key`(2) rotate the authentication key using the capability stored in the sender's`SharedEd25519PublicKey` to a new value derived from `new_public_key`Aborts if the sender does not have a `SharedEd25519PublicKey` resource.Aborts if the length of `new_public_key` is not 32."],["encode_stdlib_script","Encode `stdlib_script` with arguments `args`. Note: this is not type-safe; the individual type-safe wrappers below should be used when possible."],["encode_stdlib_upgrade_transaction",""],["encode_tiered_mint","Mints 'mint_amount' to 'designated_dealer_address' for 'tier_index' tier.Max valid tier index is 3 since there are max 4 tiers per DD. Sender should be treasury compliance account and receiver authorized DD"],["encode_transfer_with_metadata_script","Encode a program transferring `amount` coins to `recipient_address` with (optional)associated metadata `metadata` and (optional) `signature` on the metadata, amount, andsender address. The `metadata` and `signature` parameters are only required if`amount` >= 1000 LBR and the sender and recipient of the funds are two distinct VASPs.Fails if there is no account at the recipient address or if the sender's balance is lowerthan `amount`"],["encode_unfreeze_account","Unfreezes account with address addr."],["encode_unmint_lbr","Unmints `amount_lbr` LBR from the sending account into the constituent coins and depositsthe resulting coins into the sending account."],["encode_update_exchange_rate","Updates the on-chain exchange rate to LBR for the given `currency` to be given by`new_exchange_rate_denominator/new_exchange_rate_numerator`."],["encode_update_libra_version",""],["encode_update_minting_ability","Allows--true--or disallows--false--minting of `currency` based upon `allow_minting`."],["get_transaction_name","Returns a user friendly mnemonic for the transaction type if the transaction is for a known, white listed, transaction."],["rotate_authentication_key_script","Encode a program that rotates the sender's authentication key to `new_key`. `new_key`should be a 256 bit sha3 hash of an ed25519 public key."]]});