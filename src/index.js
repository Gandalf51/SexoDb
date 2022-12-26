const { existsSync, readFileSync, writeFileSync } = require("fs")
class sexodb {
    constructor(arq) {
        if (!arq.endsWith(".json")) throw new Error("O aquivo deve ser json")
        if (!existsSync(arq)) writeFileSync(arq, '{}')
        this.arq = arq
        this.content

        try {
            this.content = JSON.parse(readFileSync(arq))
        } catch (error) {
            throw new Error(`Erro ao carregar a sexodb\n ${error}`)
        }
    }
    
    cumAdd(path, value) {
        if (!path) return this._fds('nome', path)
        if (!value) return this._fds('valor', value)
        if (typeof value !== "number") throw new Error("Value estava esperando: 'number' mas recebeu" + " " + typeof value)
        const valor = this.content[path] || 0
        this.content[path] = valor + value
        writeFileSync(this.arq, JSON.stringify(this.content))
    }

    blowjobSubtract(path, value) {
        if (!path) return this._fds('nome', path)
        if (!value) return this._fds('valor', value)
        if (typeof value !== "number") throw new Error("Value estava esperando: 'number' mas recebeu" + " " + typeof value)
        const valor = this.content[path] || 0
        this.content[path] = valor - value
        writeFileSync(this.arq, JSON.stringify(this.content))
    }

    boobsSet(path, value) {
        this.content[path] = value
        writeFileSync(this.arq, JSON.stringify(this.content))
    }

    lustAll(tipe = 'all') {
        switch (tipe) {
            case 'all': return Object.entries(this.content)
            case 'values': return Object.values(this.content)
            case 'keys': return Object.keys(this.content)
            case 'object': return this.storage
            default: throw new TypeError("Metodo lustAll() recebe os tipos: all, values, keys e object, porem, recebeu" + " " + tipe)
        }
    }

    assDelete(path) {
        if (!path) return this._fds('nome', path)
        delete this.content[path]
        writeFileSync(this.arq, JSON.stringify(this.content))
    }

    pussyGet(path) {
        if (!path) return this._fds('nome', path)
        return this.content[path]
    }

    //metodo privado NÂO TIRA ESSA PORRA FDP 
    _fds(op, mt) {
        throw new Error(`Opção ${op} falta metodo ${mt}`)
    }
}

module.exports = sexodb