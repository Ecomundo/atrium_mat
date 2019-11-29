export class MailInbox {
    constructor(
      public De_deta: string,
      public cod_mens: number,
      public cod_mens_tipo: number,
      public de_mens: string,
      public cod_mens_clas_de: number,
      public para_mens: string,
      public cod_mens_clas_para: number,
      public titulo: string,
      public detalle: string,
      public fec_reg: string,
      public estado: string,
      public usuario: string,
      public fecha_junta: number,
    ) {}
}


  export class MailSent {
    constructor(
      public Para_deta: string,
      public cod_mens: number,
      public cod_mens_tipo: number,
      public de_mens: string,
      public cod_mens_clas_de: number,
      public para_mens: string,
      public cod_mens_clas_para: number,
      public titulo: string,
      public detalle: string,
      public fec_reg: string,
      public estado: string,
      public usuario: string
    ) {}
}


  export class MailOpen {
    constructor(
      public De_deta: string,
      public para_deta: string,
      public cod_mens: number,
      public cod_mens_tipo: number,
      public de_mens: string,
      public cod_mens_clas_de: number,
      public para_mens: string,
      public cod_mens_clas_para: number,
      public titulo: string,
      public detalle: string,
      public fec_reg: string,
      public estado: string,
      public usuario: string
    ) {}
}
