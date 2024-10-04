import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { FundmySolana } from "../target/types/fundmy_solana";

describe("fundmy-solana", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.FundmySolana as Program<FundmySolana>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
