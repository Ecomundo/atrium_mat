export class CursoDocente {
    constructor(
        public cod_curso: number,
        public Dm: string,
        public Dn: string,
        public Dca: string,
        public Dc: string,
        public Dp: string,
        public cod_materia: number,
        public cod_paralelo: number,
        public nivel: number,
    ) {}
}

export class GetStudens {
    constructor(
        public nomalum: string,
        public apealum: string,
        public cod_alum: number,
        public cod_per: number,
        public cod_let: string,
        public nivel: number,
        public curso: number,
        public des_paralelo: string,
        public cajamat: string,
    ) {}
}
