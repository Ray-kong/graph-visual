import{g as v}from"./index-WhPsbYCW.js";function h(r,n){for(var a=0;a<n.length;a++){const t=n[a];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in r)){const o=Object.getOwnPropertyDescriptor(t,e);o&&Object.defineProperty(r,e,o.get?o:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var l,c;function y(){if(c)return l;c=1,l=r,r.displayName="avisynth",r.aliases=["avs"];function r(n){(function(a){function t(i,s){return i.replace(/<<(\d+)>>/g,function(u,g){return s[+g]})}function e(i,s,u){return RegExp(t(i,s),u||"")}var o=/bool|clip|float|int|string|val/.source,d=[/is(?:bool|clip|float|int|string)|defined|(?:(?:internal)?function|var)?exists?/.source,/apply|assert|default|eval|import|nop|select|undefined/.source,/opt_(?:allowfloataudio|avipadscanlines|dwchannelmask|enable_(?:b64a|planartopackedrgb|v210|y3_10_10|y3_10_16)|usewaveextensible|vdubplanarhack)|set(?:cachemode|maxcpu|memorymax|planarlegacyalignment|workingdir)/.source,/hex(?:value)?|value/.source,/abs|ceil|continued(?:denominator|numerator)?|exp|floor|fmod|frac|log(?:10)?|max|min|muldiv|pi|pow|rand|round|sign|spline|sqrt/.source,/a?sinh?|a?cosh?|a?tan[2h]?/.source,/(?:bit(?:and|not|x?or|[lr]?shift[aslu]?|sh[lr]|sa[lr]|[lr]rotatel?|ro[rl]|te?st|set(?:count)?|cl(?:ea)?r|ch(?:an)?ge?))/.source,/average(?:[bgr]|chroma[uv]|luma)|(?:[rgb]|chroma[uv]|luma|rgb|[yuv](?=difference(?:fromprevious|tonext)))difference(?:fromprevious|tonext)?|[yuvrgb]plane(?:median|min|max|minmaxdifference)/.source,/getprocessinfo|logmsg|script(?:dir(?:utf8)?|file(?:utf8)?|name(?:utf8)?)|setlogparams/.source,/chr|(?:fill|find|left|mid|replace|rev|right)str|format|[lu]case|ord|str(?:cmpi?|fromutf8|len|toutf8)|time|trim(?:all|left|right)/.source,/isversionorgreater|version(?:number|string)/.source,/buildpixeltype|colorspacenametopixeltype/.source,/addautoloaddir|on(?:cpu|cuda)|prefetch|setfiltermtmode/.source].join("|"),m=[/has(?:audio|video)/.source,/height|width/.source,/frame(?:count|rate)|framerate(?:denominator|numerator)/.source,/getparity|is(?:field|frame)based/.source,/bitspercomponent|componentsize|hasalpha|is(?:planar(?:rgba?)?|interleaved|rgb(?:24|32|48|64)?|y(?:8|u(?:va?|y2))?|yv(?:12|16|24|411)|420|422|444|packedrgb)|numcomponents|pixeltype/.source,/audio(?:bits|channels|duration|length(?:[fs]|hi|lo)?|rate)|isaudio(?:float|int)/.source].join("|"),f=[/avi(?:file)?source|directshowsource|image(?:reader|source|sourceanim)|opendmlsource|segmented(?:avisource|directshowsource)|wavsource/.source,/coloryuv|convertbacktoyuy2|convertto(?:RGB(?:24|32|48|64)|(?:planar)?RGBA?|Y8?|YV(?:12|16|24|411)|YUVA?(?:411|420|422|444)|YUY2)|fixluminance|gr[ae]yscale|invert|levels|limiter|mergea?rgb|merge(?:chroma|luma)|rgbadjust|show(?:alpha|blue|green|red)|swapuv|tweak|[uv]toy8?|ytouv/.source,/(?:colorkey|reset)mask|layer|mask(?:hs)?|merge|overlay|subtract/.source,/addborders|(?:bicubic|bilinear|blackman|gauss|lanczos4|lanczos|point|sinc|spline(?:16|36|64))resize|crop(?:bottom)?|flip(?:horizontal|vertical)|(?:horizontal|vertical)?reduceby2|letterbox|skewrows|turn(?:180|left|right)/.source,/blur|fixbrokenchromaupsampling|generalconvolution|(?:spatial|temporal)soften|sharpen/.source,/trim|(?:un)?alignedsplice|(?:assume|assumescaled|change|convert)FPS|(?:delete|duplicate)frame|dissolve|fade(?:in|io|out)[02]?|freezeframe|interleave|loop|reverse|select(?:even|odd|(?:range)?every)/.source,/assume[bt]ff|assume(?:field|frame)based|bob|complementparity|doubleweave|peculiarblend|pulldown|separate(?:columns|fields|rows)|swapfields|weave(?:columns|rows)?/.source,/amplify(?:db)?|assumesamplerate|audiodub(?:ex)?|audiotrim|convertaudioto(?:(?:8|16|24|32)bit|float)|converttomono|delayaudio|ensurevbrmp3sync|get(?:left|right)?channel|kill(?:audio|video)|mergechannels|mixaudio|monotostereo|normalize|resampleaudio|ssrc|supereq|timestretch/.source,/animate|applyrange|conditional(?:filter|reader|select)|frameevaluate|scriptclip|tcp(?:server|source)|writefile(?:end|if|start)?/.source,/imagewriter/.source,/blackness|blankclip|colorbars(?:hd)?|compare|dumpfiltergraph|echo|histogram|info|messageclip|preroll|setgraphanalysis|show(?:framenumber|smpte|time)|showfiveversions|stack(?:horizontal|vertical)|subtitle|tone|version/.source].join("|"),b=[d,m,f].join("|");a.languages.avisynth={comment:[{pattern:/(^|[^\\])\[\*(?:[^\[*]|\[(?!\*)|\*(?!\])|\[\*(?:[^\[*]|\[(?!\*)|\*(?!\]))*\*\])*\*\]/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0,greedy:!0}],argument:{pattern:e(/\b(?:<<0>>)\s+("?)\w+\1/.source,[o],"i"),inside:{keyword:/^\w+/}},"argument-label":{pattern:/([,(][\s\\]*)\w+\s*=(?!=)/,lookbehind:!0,inside:{"argument-name":{pattern:/^\w+/,alias:"punctuation"},punctuation:/=$/}},string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0,inside:{constant:{pattern:/\b(?:DEFAULT_MT_MODE|(?:MAINSCRIPT|PROGRAM|SCRIPT)DIR|(?:MACHINE|USER)_(?:CLASSIC|PLUS)_PLUGINS)\b/}}}],variable:/\b(?:last)\b/i,boolean:/\b(?:false|no|true|yes)\b/i,keyword:/\b(?:catch|else|for|function|global|if|return|try|while|__END__)\b/i,constant:/\bMT_(?:MULTI_INSTANCE|NICE_FILTER|SERIALIZED|SPECIAL_MT)\b/,"builtin-function":{pattern:e(/\b(?:<<0>>)\b/.source,[b],"i"),alias:"function"},"type-cast":{pattern:e(/\b(?:<<0>>)(?=\s*\()/.source,[o],"i"),alias:"keyword"},function:{pattern:/\b[a-z_]\w*(?=\s*\()|(\.)[a-z_]\w*\b/i,lookbehind:!0},"line-continuation":{pattern:/(^[ \t]*)\\|\\(?=[ \t]*$)/m,lookbehind:!0,alias:"punctuation"},number:/\B\$(?:[\da-f]{6}|[\da-f]{8})\b|(?:(?:\b|\B-)\d+(?:\.\d*)?\b|\B\.\d+\b)/i,operator:/\+\+?|[!=<>]=?|&&|\|\||[?:*/%-]/,punctuation:/[{}\[\]();,.]/},a.languages.avs=a.languages.avisynth})(n)}return l}var p=y();const w=v(p),_=h({__proto__:null,default:w},[p]);export{_ as a};
