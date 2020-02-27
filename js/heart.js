<code class="hljs javascript">(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">window,document,undefined</span>)</span>{  
    <span class="hljs-keyword">var</span> hearts = [];  
      
    <span class="hljs-built_in">window</span>.requestAnimationFrame = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{  
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">window</span>.requestAnimationFrame ||   
        <span class="hljs-built_in">window</span>.webkitRequestAnimationFrame ||  
        <span class="hljs-built_in">window</span>.mozRequestAnimationFrame ||  
         <span class="hljs-built_in">window</span>.oRequestAnimationFrame ||  
         <span class="hljs-built_in">window</span>.msRequestAnimationFrame ||  
         <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">callback</span>)</span>{  
             setTimeout(callback,<span class="hljs-number">1000</span>/<span class="hljs-number">60</span>);  
         }  
    })();  
      
    init();  
  
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">init</span>(<span class="hljs-params"></span>)</span>{  
        css(<span class="hljs-string">".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}"</span>);  
        attachEvent();  
        gameloop();  
    }  
  
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">gameloop</span>(<span class="hljs-params"></span>)</span>{  
        <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i=<span class="hljs-number">0</span>;i<hearts.length;i++){  
            <span class="hljs-keyword">if</span>(hearts[i].alpha <=<span class="hljs-number">0</span>){  
                <span class="hljs-built_in">document</span>.body.removeChild(hearts[i].el);  
                hearts.splice(i,<span class="hljs-number">1</span>);  
                <span class="hljs-keyword">continue</span>;  
             }  
  
             hearts[i].y--;  
             hearts[i].scale += <span class="hljs-number">0.004</span>;  
             hearts[i].alpha -= <span class="hljs-number">0.013</span>;  
             hearts[i].el.style.cssText = <span class="hljs-string">"left:"</span>+hearts[i].x+<span class="hljs-string">"px;top:"</span>+hearts[i].y+<span class="hljs-string">"px;opacity:"</span>+hearts[i].alpha+<span class="hljs-string">";transform:scale("</span>+hearts[i].scale+<span class="hljs-string">","</span>+hearts[i].scale+<span class="hljs-string">") rotate(45deg);background:"</span>+hearts[i].color;  
        }  
  
        requestAnimationFrame(gameloop);  
    }  
  
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attachEvent</span>(<span class="hljs-params"></span>)</span>{  
        <span class="hljs-keyword">var</span> old = <span class="hljs-keyword">typeof</span> <span class="hljs-built_in">window</span>.onclick===<span class="hljs-string">"function"</span> && <span class="hljs-built_in">window</span>.onclick;  
        <span class="hljs-built_in">window</span>.onclick = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>)</span>{  
            old && old();  
            createHeart(event);  
        }  
    }  
  
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createHeart</span>(<span class="hljs-params">event</span>)</span>{  
        <span class="hljs-keyword">var</span> d = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">"div"</span>);  
        d.className = <span class="hljs-string">"heart"</span>;  
        hearts.push({  
            <span class="hljs-attr">el</span> : d,  
            <span class="hljs-attr">x</span> : event.clientX - <span class="hljs-number">5</span>,  
            <span class="hljs-attr">y</span> : event.clientY - <span class="hljs-number">5</span>,  
            <span class="hljs-attr">scale</span> : <span class="hljs-number">1</span>,  
            <span class="hljs-attr">alpha</span> : <span class="hljs-number">1</span>,  
            <span class="hljs-attr">color</span> : randomColor()  
        });  
  
        <span class="hljs-built_in">document</span>.body.appendChild(d);  
    }  
  
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">css</span>(<span class="hljs-params">css</span>)</span>{  
        <span class="hljs-keyword">var</span> style = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">"style"</span>);  
        style.type=<span class="hljs-string">"text/css"</span>;  
        <span class="hljs-keyword">try</span>{  
            style.appendChild(<span class="hljs-built_in">document</span>.createTextNode(css));  
        }  
        <span class="hljs-keyword">catch</span>(ex){  
            style.styleSheet.cssText = css;  
        }  
  
        <span class="hljs-built_in">document</span>.getElementsByTagName(<span class="hljs-string">'head'</span>)[<span class="hljs-number">0</span>].appendChild(style);  
    }  
  
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">randomColor</span>(<span class="hljs-params"></span>)</span>{  
        <span class="hljs-keyword">return</span> <span class="hljs-string">"rgb("</span>+(~~(<span class="hljs-built_in">Math</span>.random()*<span class="hljs-number">255</span>))+<span class="hljs-string">","</span>+(~~(<span class="hljs-built_in">Math</span>.random()*<span class="hljs-number">255</span>))+<span class="hljs-string">","</span>+(~~(<span class="hljs-built_in">Math</span>.random()*<span class="hljs-number">255</span>))+<span class="hljs-string">")"</span>;  
    }  
      
})(<span class="hljs-built_in">window</span>,<span class="hljs-built_in">document</span>);</code>
