### 1. **Compilação do SASS**
- Compila arquivos `.scss` da pasta `source/styles/`
- Gera CSS comprimido na pasta `build/styles/`
- Inclui sourcemaps para debug
- Tratamento de erros com logs detalhados

### 2. **Compressão de Imagens**
- Comprime todas as imagens da pasta `source/imgs/`
- Salva as imagens otimizadas na pasta `build/imgs/`
- Configurações otimizadas: `optimizationLevel: 5`, `progressive: true`, `interlaced: true`
- **Resultado**: 6 imagens comprimidas, economizando 770 kB (39.4% de redução)

### 3. **Compressão de JavaScript**
- Comprime e ofusca arquivos `.js` da pasta `source/scripts/`
- Salva os arquivos otimizados na pasta `build/scripts/`
- Usa `gulp-uglify` para minificação e `gulp-obfuscate` para ofuscação

## 🚀 Comandos Disponíveis

```bash
# Executar todas as tarefas (build completo)
npx gulp build

# Tarefas individuais
npx gulp compilarSass    # Compilar SASS
npx gulp comprimirJS     # Comprimir JavaScript
npx gulp comprimirImgs   # Comprimir imagens

# Modo watch (desenvolvimento)
npx gulp watch          # Monitora mudanças e recompila automaticamente
npx gulp                # Comando padrão (equivale a watch)
```

## �� Estrutura de Saída

```
build/
├── imgs/           # Imagens comprimidas
├── scripts/        # JavaScript comprimido e ofuscado
└── styles/
    ├── main.css    # CSS compilado e comprimido
    └── maps/       # Sourcemaps para debug
```
