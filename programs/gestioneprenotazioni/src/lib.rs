use anchor_lang::prelude::*;

declare_id!("CFnngCnA43hWQiCSRMR3JsEU6rJppfKSFeABp82w1Nf");

#[program]
pub mod gestioneprenotazioni {
    use anchor_lang::solana_program::entrypoint::ProgramResult;

    use super::*;

    pub fn create_utente(context: Context<CreateUtente>, nome: String, cognome: String, username: String, password: String) -> ProgramResult {
        let utente = &mut context.accounts.utente;
        utente.nome = nome;
        utente.cognome = cognome;
        utente.username = username;
        utente.password = password;
        Ok(())
    }
    
    pub fn create_postazione(context: Context<CreatePostazione>, id: u64) -> ProgramResult {
        let postazione = &mut context.accounts.postazione;
        postazione.id = id;
        Ok(())
    }

    pub fn create_prenotazione(context: Context<CreatePrenotazione>, data: u64, utente: Pubkey, postazione: Pubkey) -> ProgramResult {
        let prenotazione = &mut context.accounts.prenotazione;
        prenotazione.data = data;
        prenotazione.utente = utente;
        prenotazione.postazione = postazione;
        prenotazione.cancellata = false;
        Ok(())
    }
}

#[account]
pub struct Utente {
    pub nome: String,
    pub cognome: String,
    pub username: String,
    pub password: String,
}

#[account]
pub struct Postazione {
    pub id: u64,
}

#[account]
pub struct Prenotazione {
    pub id: u64,
    pub utente: Pubkey,
    pub postazione: Pubkey,
    pub data: u64,
    pub cancellata: bool,
}

#[derive(Accounts)]
pub struct CreateUtente<'info> {
    #[account(init, payer = user, space = 100, seeds = [b"user_info".as_ref(), user.key.as_ref()], bump)]
    pub utente: Account<'info, Utente>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}


#[derive(Accounts)]
pub struct CreatePostazione<'info> {
    #[account(init, payer = user, space = 8)]
    pub postazione: Account<'info, Postazione>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CreatePrenotazione<'info> {
    #[account(init, payer = user, space = 100)]
    pub prenotazione: Account<'info, Prenotazione>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}