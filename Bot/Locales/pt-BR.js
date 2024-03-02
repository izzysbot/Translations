module.exports = {
	lang: 'pt',
	div: '<:izzysmine:921447883717373994> {{user}} **|** Quer um servidor de Minecraft? Vem pro [IzzysMC](https://indevelopment.com)\n>>> ⤷ **`IP:` **mc.izzysbot.xyz;\n⤷ **`Versões:`** Java (1.17.1/Original/Pirata).',
	afk: {
		set: ':zzz: {{user}} **|** Você tá afk, motivo: `{{status}}`.',
		remove: ':zzz: {{user}} **|** Você não tá mais afk.',
		mention: ':zzz: {{user}} **|** Tá afk [{{time}}], motivo: `{{status}}`.',
	},
	image: {
		editando: '✍️ %u **|** editando',
		args: '✍️ %u **|** Me dá um argumento pra editar',
		long: '✍️ %u **|** Sua mensagem é longa demais, tenta reduzir pra 300 caracteres',
		achivment: 'Progresso Feito!'
	},
	actions: {
		kiss: {
			description: '%u1 deu um beijo em %u2.',
			labels: {
				rt: 'Retribuir'
			}
		},
		slap: {
			description: '%u1 deu um tapa em %u2.',
			labels: {
				rt: 'Retribuir'
			}
		},
		hug: {
			description: '%u1 deu um abraço em %u2.',
			labels: {
				rt: 'Retribuir'
			}
		},
		pat: {
			description: '%u1 fez carinho na cabeça de %u2.',
			labels: {
				rt: 'Retribuir'
			}
		}
	},
	unbanall: {
		title: 'Desbanir Todo Mundo',
		description: 'Quer desbanir todo mundo do seu servidor? Vai demorar, mas pode desfazer com `/undesbanirtodo`.',
		confirm: 'Sim, desbanir todo mundo.',
		done: 'Todo mundo foi desbanido, tempo: `%t`.',
	},
	desunban: {
		title: 'Desunban',
		description: 'Quer banir todo mundo que já foi desbanido do seu servidor? Vai demorar, mas pode desfazer com `/desbanirtodo`.',
		confirm: 'Sim, banir todo mundo.',
		done: 'Todo mundo foi banido, tempo: `%t`.',
	},
	report: {
		p1: 'Quer denunciar alguém? Tá no lugar certo! Pra reportar, é só clicar no formulário!',
		id: 'ID do Formulário:',
		dm: 'Vê tuas DMs!'
	},
	daily: {
		coletado: 'Você coletou **%m** diárias, volta amanhã.',
		coletou: 'Já coletou hoje, volta em **%time**',
		coinscoletado: '**Você ganhou %add coins <:coins:1213045943981711381>** \n Veja teu nível de prêmios diários:',
		baucoletado: '**Você ganhou __1__ Baú <a:ts_bau:1213047244702482453>** \n Veja teu nível de prêmios diários:',
		colete: 'Coleta tua recompensa diária'
	},
	premium: 'Descobriu uma funcionalidade premium, pra ser premium entra no [servidor de suporte](<https://discord.gg/Ny7anmsrjb>)!',
	bola: {
		title: '🎱 Bola Mágica',
		field1: '**Pergunta:**',
		field2: '**Resposta:**',
	},
	ship: {
		nou: 'Menciona alguém pra shippar',
		d1: 'Vocês não combinam, são muito diferentes 😔',
		d2: 'Podem ser amigos, mas não vejo futuro romântico, vocês são parecidos 🤝',
		d3: 'Podem ser um casal, gostam das mesmas coisas e se conhecem bem 👀',
		d4: 'São perfeitos juntos, vai fundo, tem tudo pra dar certo ❤️'
	},
	dashboard: 'As configurações tão no dashboard, acessa aqui: https://izzysbot.xyz/dashboard/%g',
	backup: {
		create: {
			success: 'Backup criado!\n⤷ ID: `%id`, tempo gasto: `%t`',
		},
		list: {
			noBackups: 'Não tem backups.',
			backupList: 'Lista de backups:',
			backupID: 'ID: %id',
		},
		load: {
			success: 'Backup carregado!',
			error: 'Backup não encontrado.',
			confirm: 'Quer carregar o backup? Depois disso, não tem volta.\n> Pra carregar clica no **botão** abaixo.',
		}
	},
	clusters: {
		desc: '> Esse servidor tá no cluster `%id`\n- Nome: `%name`\n- Ping: `%ping`',
		field: 'Info Clusters:',
		fielDesc: '- Cluster %id\n- Ping: %p\n- PingDB: %pd\n- Consumo: %ram'
	},
	gender: {
		title: 'Gênero',
		desc: 'Oi, %u, me conta, tu é menino? Menina? Ou nenhum dos dois? Preciso saber pra responder melhor!\n>>> - 🚹 Menino\n- 🚺 Menina\n- 🚻 Nenhum dos dois',
		change: 'Gênero alterado pra `%g`!',
		male: 'menino',
		female: 'menina'
	},
    anagramWords: ['andar', 'apreciar', 'reconhecer', 'ter', 'anúncio', 'televisão', 'buraco', 'acadêmico', 'pacote',
		'residente', 'puxar', 'tragédia', 'olhar', 'compacto', 'má', 'faca', 'perseguição', 'bomba', 'biscoito', 'leilão', 'tratar',
	 'atrair', 'empregar', 'naufrágio', 'incerteza', 'rumor', 'formal', 'nobre', 'brincadeira', 'original', 'cover', 'ballet', 'cheiro',
	  'ligação', 'refletir', 'barulhento', 'ignorante', 'pão', 'fraco', 'vidro', 'quarto', 'desordem', 'hall', 'manhã', 'conexão',
	   'inocente', 'condenado', 'sugerir', 'filme', 'mínimo', 'curso', 'favorável', 'slot', 'registro', 'tocha', 'menor', 'laticínios',
		'obrigado', 'caneta', 'alocação', 'qualificado', 'irmã', 'torre', 'espírito', 'proteção', 'ver', 'transação', 'harmonia',
		'precedente'],
	botban: {
		title: 'Você tá banido!',
		description: '↳ Foi banido da `%z` por: `%r`\n> <:info:1213154090876538901> Pode apelar no [servidor de suporte](https://discord.gg/Ny7anmsrjb).',
	},
	customCommand: 'Comando criado, usa `/%n` pra usar.',
	alreadyExists: 'Comando já existe.',
	ticket: {
		sus: 'Sucesso!',
		already: 'Você já tem um ticket.',
		await: 'Espera aí, até te responderem.',
		created: 'Ticket criado.',
		delete: 'Ticket fechado, vai apagar em 10 segundos.',
		create: 'Clica abaixo pra criar um ticket.',
		labels: {
			delete: 'Fechar',
			create: 'Abrir Ticket'
		}
	},
	logs: {
		bulkDelete: 'Foram deletadas %n mensagens em #%c (%id).',
		oldMessage: 'Mensagem Antiga:',
		newMessage: 'Mensagem Nova:',
		deleted: 'Mensagem Deletada:',
		channel: 'Canal:',
		url: 'Link:',
		message: {
			title: 'Logs de Mensagem'
		},
		bans: {
			title: 'Logs de Bans',
		},
		user: 'Usuário:',
		reason: 'Motivo:',
		mod: 'Moderador:',
		bani: 'Banido',
		desbani: 'Desbanido',
		jump: 'Ir pra mensagem',
		set: 'Canal setado pra `%c`'
	},
	aki: {
		reg: 'pt',
		q: 'Pergunta:',
		r: 'Respostas:',
		i: 'Iniciando o Akinator',
		is: 'Esse é teu personagem?',
		win: 'Acertei de novo.',
		nowin: 'Uh, você ganhou',
		yay: 'Amei brincar!',
		res: '[sim (**s**) / não (**n**)]'
	},
	labels: {
		recalc: 'Recalcular',
		unban: 'Desbanir',
		buy: 'Comprar',
		load: 'Carregar'
	},
	guess: {
		start: 'Jogo começa em **5 segundos**, número entre `%min` e `%max`.',
		started: 'Vai começar!',
		number: 'Número escolhido: `%num`, adivinha aí!',
		win: 'Acertou! Número era `%num`!'
	},
	lockdown: {
		pass: 'Envia `lock` pra iniciar o lockdown.\n> ⚠️ Se quiser cancelar, manda qualquer outra coisa.',
		cancel: 'Lockdown cancelado.',
		sucess: 'Lockdown feito.',
		locking: 'Lockdown rolando.',
		noCanal: 'Nenhum canal fechado.'
	},
	print: {
		site: 'Print do site:'
	},
	mention: {
		hello: 'Oi %user!',
		about: 'Sou um bot multifuncional!',
		help: 'Pra ver os comandos, digita **/help**.',
		labels: {
			support: 'Servidor de Suporte',
			invite: 'Convite',
			website: 'Site'
		}
	},
	reactionRole: {
		invalidMessage: 'Não achei mensagem com o id `%id%`',
		sucess: 'ReactionRole criado!'
	},
	eventLog: {
		fields: {
			deletedMessage: 'Mensagem Deletada:',
			oldMessage: 'Mensagem Antiga:',
			newMessage: 'Mensagem Nova:'
		},
		channel: 'Canal:'
	},
	docs: {
		args: 'Diz o que quer pesquisar na documentação.'
	},
	fnshop: {
		args: 'Manda o ID do canal pra enviar a loja do fortnite.',
		channel: 'Sem permissão pra enviar mensagem no canal.',
		sucess: 'Canal setado!'
	},
	message: {
		mod: 'Só meus moderadores podem usar!',
		P: 'Oi, humano!',
		view: 'Não tenho permissão pra ver mensagens!',
		the: 'O Comando',
		unk: 'não existe ou não pode ser executado agora!',
		user: 'Você não tem todas as permissões pra usar este comando!\nPermissões necessárias:',
		bot: 'Não tenho todas as permissões pra executar este comando! \n Permissões necessárias:',
		dev: 'Só meus devs podem usar!',
		c: 'Espera %t segundos pra usar outro comando.',
		e: 'Erro!',
		e2: 'Reporta!',
		e3: 'Minha equipe já sabe, mas que tal ajudar? Abre um [issue](https://github.com/izzysbot/izzys/issues) ou reporta no [servidor de suporte](https://discord.gg/Ny7anmsrjb), vamos fazer o discord melhor, juntos 🤝',
		nsfw: 'Só em canais nsfw'
	},
	host: {
		db: 'Uso [MongoDB](https://mongodb.com), hospedados na [Azure](https://azure.microsoft.com).',
		vps: 'Hospedada na VPS, com [OVH](https://ovh.com) e Ubuntu.'
	},
	giveaway: {
		sec: 'segundos',
		min: 'minutos',
		hrs: 'horas',
		day: 'dias',
		term: 'Terminou ás',
		host: 'Sorteio de: {user}',
		win: 'ganhador(es)',
		wins: 'Parabéns, {winners}! Ganhou **{this.prize}**!\n{this.messageURL}',
		react: 'Reage com 🎁 pra participar!',
		restante: 'Tempo Restante:',
		no: 'Sem participações válidas',
		give: 'SORTEIO',
		giveend: 'SORTEIO ENCERRADO',
		start: 'Errado, usa `%pgiveaway-start [tempo(10s, 10m)] [ganhadores(1, 1w)] [prêmio(fotos de gatinhos)]`, sem **[]** ou **()**.',
		end: 'Errado, usa `%pgiveaway-end [id da mensagem]`',
		reroll: 'Errado, usa `%pgiveaway-reroll [id da mensagem]`',
		novo: 'Novo ganhador(es): {winners}! Parabéns, ganharam **{this.prize}**\n{this.messageURL}',
		err: 'Sem participações válidas, nenhum(s) novo(s) vencedor(es) escolhidos!'
	},
	help: {
		title: 'Lista de Comandos • ',
		creators: 'Fui desenvolvida por ',
		description: '> Meu prefixo atual é: `%p`\n> Dúvida? [Servidor de Suporte](https://discord.gg/Ny7anmsrjb)\n> Me adiciona [aqui](https://discord.com/oauth2/authorize?client_id=880173509077266483&scope=bot&permissions=805432446)',
		nsfw: 'Precisa estar em canal NSFW pra ver os comandos nsfw. '
	},
	calc: {
		ex: 'Falta argumento, usa `%pcalc <expressão>`',
		inv: 'Expressão inválida.',
		res: 'Resultado'
	},
	botinfo: {
		texto: 'Olá, sou a **%bot**, um bot multifuncional! Conheço **%u pessoas** diferentes e estou em **%g servidores**.\n\nDesenvolvida por `%devs` com [Eris](https://abal.moe/Eris/) usando [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) & [NodeJS](https://nodejs.org/en/)',
		recursos: 'Recursos:',
		mem: 'uso %m da minha memória.',
	},
	messages: {
		tem: 'tem',
		msg: 'mensagens',
		title: 'Mensagens'
	},
	together: {
		channel: 'Precisa estar num canal de voz.',
		done: 'Clica no link pra fazer a atividade:',
		done2: '**(só no pc)**'
	},
	erela: {
		np: 'Tocando',
		end: 'Música acabou, tchau',
		skip: 'Pulada.',
		not: 'Nada tocando.',
		voice: 'Sozinha no canal, saindo!',
		duration: 'Duração:',
		loop: {
			ativado: 'Loop ativado.',
			desativado: 'Loop desativado.'
		}
	},
	play: {
		nada: 'Falta argumento, usa `%pplay <música | url>`',
		add: 'Na fila',
		can: 'Precisa estar num canal de voz.'
	},
	waifu: {
		casar: 'Reage com 💖 pra casar',
		casou: 'Casado com %w',
		dono: 'Dono',
		utl: 'Usa: %pwaifu-info [ID]',
		casado: 'Já casou recentemente, só a cada 2 horas',
		noharem: 'Sem waifus, usa `%pwaifu roll` pra adicionar.',
		battle: 'Batalha de Waifus',
		battleDesc: '**%u** quer duelar, quem vai?',
		label: 'Eu!',
		yms: 'Não pode batalhar consigo mesmo.',
		bat: '%u vs %2u, 30s pra escolher waifu (jogador encontrado em `%t`).',
		select: 'Nada Selecionado.'
	},
	tradutor: {
		lang: 'Especifica a linguagem, ex: %translator **en** Oi',
		text: 'Especifica o texto, ex: %translator en  **Oi** '
	},
	invite: {
		add: 'Me adiciona!',
		desc: 'Gostou dos comandos? Me [adiciona](https://discord.com/oauth2/authorize?client_id=%id&scope=bot%20applications.commands&permissions=805432446)\n\nDúvida? [Servidor de Suporte](https://discord.gg/Ny7anmsrjb)\n\n Adicionou e quer configurar? vai na [dashboard](https://izzysbot.xyz/dashboard)'
	},
	ban: {
		noarg: '**Menciona** alguém ou dá o **ID**.',
		vc: 'Punir',
		r: '✅',
		r2: '✅',
		mot: 'Não Definido',
		mot2: 'Punido por:',
		mot3: 'Motivo:',
		the: 'O Usuário',
		foi: 'punido.',
		dev: 'Não pode punir o dev.'
	},
	clear: {
		msg: 'mensagens** apagadas',
		no: 'Quantas quer apagar?',
		p: 'Procurando, 30 segundos...',
		num: '2 a 100'
	},
	baninfo: {
		user: 'Usuário:',
		reason: 'Motivo:',
		noreason: 'Nenhum motivo.',
		desban: 'Reage com 🐹 pra desbanir.'
	},
	multiLang: {
		unknownLanguage: 'Idioma desconhecido.\n<:info:1213154090876538901> Idiomas: %langs',
		insertLang: 'Não especificou. Pra mudar o idioma, usa `%pidioma %langs`'
	},
	autorole: {
		insertRole: 'Não especificou, usa: `%pautorole <@cargo | cargo id | desativar>.`',
		success: 'Entrada dá cargo `%cargo`.',
		disabled: 'Autorole desativado.',
		noset: 'Não Setado',
		bot: 'Cargo pra bots?',
		botset: 'Setado pra bots:',
		user: 'Cargo pra membros?',
		userset: 'Setado pra membros:',
		mem: 'Membros',
		del: 'Desativar',
		del2: 'Reage com ❌ pra desativar/deletar'
	},
	userinfo: {
		inf: 'Info:',
		tag: 'Tag:',
		badges: 'Emblemas:',
		id: 'ID:',
		create: 'Criado:',
		join: 'Entrou:',
		status: 'Status:',
		bots: 'Bots:',
		roles: 'Cargos:',
		emoji: 'Emojis:',
		boost: 'Boost:',
		voice: 'Canales de voz:',
		text: 'Canales de texto:',
		act: 'Atividade:'
	},
	shared: {
		commu: 'Servidor de Suporte',
		dash: 'Dashboard',
		invite: 'Convite',
		website: 'Site',
		upvote: 'Vote',
		prefix: 'Prefixo'
	},
	stats: {
		up: 'Uptime:',
		serv: 'Servidores:',
		user: 'Usuários:',
		msg: 'Mensagens:'
	},
	blacklist: {
		bl: 'Blacklist',
		label: 'Usuário',
		usr: 'Usuário',
		add: 'Adicionado!',
		add2: 'Usuário adicionado com sucesso a blacklist!',
		rmv: 'Removido!',
		rmv2: 'Usuário removido com sucesso da blacklist!',
		bad: 'Nenhum usuário encontrado.'
	},
	economy: {
		cur: 'Sistema monetário:',
		bal: 'Balanço',
		win: 'Ganhos',
		cur2: 'Coins',
		wallet: 'Carteira',
		bank: 'Banco',
		inv: 'Inventário',
		coin: '<:coins:1213045943981711381>',
		hol: 'Holding'
	}
}
