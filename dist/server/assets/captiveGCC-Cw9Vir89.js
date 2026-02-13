import{jsxs as t,Fragment as m,jsx as e}from"react/jsx-runtime";import{useRef as p,useState as u,useEffect as b}from"react";import{Helmet as h}from"react-helmet";import{FaArrowRight as s,FaShieldAlt as f,FaBuilding as g,FaUsers as x,FaChartLine as y,FaCogs as v,FaLightbulb as C,FaServer as w,FaDatabase as N,FaGlobe as k,FaFlask as G,FaCheckCircle as S}from"react-icons/fa";import{L as c}from"./index-BIgHzQba.js";import{N as F}from"./Navbar-DocdwkCR.js";import{F as j}from"./Footer-B9ZuH_uM.js";import"react-dom";import"react-router";import"@remix-run/router";import"./a-BvPx7Z2B.js";import"lucide-react";import"react-icons/fa6";const O="/assets/devops-cloud-LTJfu9pY.jpg",T="/assets/research-CMe2bzln.jpg";function Y(a=.15){const r=p(null),[l,o]=u(!1);return b(()=>{const i=new IntersectionObserver(([d])=>d.isIntersecting&&o(!0),{threshold:a});return r.current&&i.observe(r.current),()=>i.disconnect()},[]),[r,l]}function n({children:a,className:r="",delay:l=0}){const[o,i]=Y();return e("div",{ref:o,className:r,style:{opacity:i?1:0,transform:i?"translateY(0)":"translateY(40px)",transition:`opacity 0.7s ease ${l}s, transform 0.7s ease ${l}s`},children:a})}const $=()=>t(m,{children:[t(h,{children:[e("title",{children:"Captive GCC | Build, Control, Scale & Innovate Your Global Capability Center"}),e("meta",{name:"description",content:"Set up a Captive Global Capability Center (GCC) with full ownership, deep domain expertise, and scalable talent. We help enterprises build Technology Centers, Analytics Hubs, Shared Services, and R&D Labs."}),e("meta",{name:"keywords",content:"Captive GCC, Global Capability Center, GCC setup India, offshore innovation hub, technology center, analytics hub, shared services, R&D lab, captive center setup"}),e("meta",{name:"robots",content:"index, follow"}),e("meta",{name:"author",content:"Your Company Name"}),e("link",{rel:"canonical",href:"https://yourdomain.com/services/captive-gcc"}),e("meta",{property:"og:type",content:"website"}),e("meta",{property:"og:url",content:"https://yourdomain.com/services/captive-gcc"}),e("meta",{property:"og:title",content:"Captive GCC | Build Your Global Capability Center"}),e("meta",{property:"og:description",content:"Build a fully owned Global Capability Center—designed for long-term value, deep expertise, and complete operational control."}),e("meta",{property:"og:image",content:"https://yourdomain.com/og-captive-gcc.jpg"}),e("meta",{property:"og:image:width",content:"1200"}),e("meta",{property:"og:image:height",content:"630"}),e("meta",{property:"og:image:alt",content:"Captive GCC - Global Capability Center setup services"}),e("meta",{property:"og:site_name",content:"Your Company Name"}),e("meta",{name:"twitter:card",content:"summary_large_image"}),e("meta",{name:"twitter:site",content:"@yourhandle"}),e("meta",{name:"twitter:title",content:"Captive GCC | Build Your Global Capability Center"}),e("meta",{name:"twitter:description",content:"Set up a fully owned Captive GCC. Technology Centers, Analytics Hubs, Shared Services & R&D Labs."}),e("meta",{name:"twitter:image",content:"https://yourdomain.com/og-captive-gcc.jpg"}),e("meta",{name:"twitter:image:alt",content:"Captive GCC services"}),e("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Captive GCC Setup",
            "description": "End-to-end setup of Captive Global Capability Centers including Technology Centers, Analytics Hubs, Shared Services, and R&D Labs.",
            "provider": {
              "@type": "Organization",
              "name": "Your Company Name",
              "url": "https://yourdomain.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "Global Capability Center Consulting"
          }
        `}),e("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),e("link",{href:"https://fonts.googleapis.com/css2?family= :wght@700;800&family=Outfit:wght@300;400;500;600&display=swap",rel:"stylesheet"})]}),e("style",{children:`
        * { box-sizing: border-box; }
        body { font-family: 'Outfit', sans-serif; }
        .  { font-family: ' ', sans-serif; }

        /* hero particles */
        @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-30px) scale(1.1)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,20px) scale(0.9)} }
        @keyframes float3 { 0%,100%{transform:translate(0,0)} 33%{transform:translate(15px,-15px)} 66%{transform:translate(-15px,10px)} }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:.7} 100%{transform:scale(1.5);opacity:0} }
        @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
        @keyframes slideLeft { from{opacity:0;transform:translateX(-60px)} to{opacity:1;transform:translateX(0)} }
        @keyframes slideRight { from{opacity:0;transform:translateX(60px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }

        .hero-tag {
          animation: fadeUp 0.6s ease both;
        }
        .hero-h1 { animation: slideLeft 0.8s ease 0.1s both; }
        .hero-p  { animation: slideRight 0.8s ease 0.3s both; }
        .hero-cta { animation: fadeUp 0.8s ease 0.5s both; }

        .orb1 { animation: float1 8s ease-in-out infinite; }
        .orb2 { animation: float2 11s ease-in-out infinite; }
        .orb3 { animation: float3 14s ease-in-out infinite; }

        .ticker-track { animation: ticker 28s linear infinite; white-space:nowrap; }

        .card-hover {
          transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease;
        }
        .card-hover:hover { transform: translateY(-8px) scale(1.02); }

        .icon-wrap {
          transition: transform 0.3s ease;
        }
        .card-hover:hover .icon-wrap { transform: rotate(-8deg) scale(1.15); }

        .gradient-border {
          position: relative;
        }
        .gradient-border::before {
          content:'';
          position:absolute;
          inset:0;
          border-radius:1rem;
          padding:2px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity:0;
          transition: opacity 0.3s ease;
        }
        .gradient-border:hover::before { opacity:1; }

        .stat-card {
          position:relative;
          overflow:hidden;
        }
        .stat-card::after {
          content:'';
          position:absolute;
          top:0;left:-100%;
          width:60%;height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent);
          animation: shimmer 2.5s infinite;
          animation-play-state: paused;
        }
        .stat-card:hover::after { animation-play-state: running; }

        .cta-btn {
          position:relative;
          overflow:hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .cta-btn::after {
          content:'';
          position:absolute;
          inset:0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity:0;
          transition: opacity 0.3s ease;
        }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 20px 50px rgba(59,130,246,0.4); }
        .cta-btn:hover::after { opacity:1; }

        .step-line::after {
          content:'';
          position:absolute;
          top:28px; left:50%;
          width:2px; height:calc(100% + 2rem);
          background:linear-gradient(to bottom, #3b82f6, #8b5cf6 60%, transparent);
        }
        @media(max-width:767px){ .step-line::after { display:none; } }
      `}),e(F,{}),t("section",{className:"relative overflow-hidden text-white",style:{background:"linear-gradient(135deg, #010c41 0%, #02145a 40%, #0d0630 100%)",minHeight:"100vh",display:"flex",alignItems:"center"},"aria-label":"Captive GCC Hero",children:[e("div",{className:"orb1 absolute top-10 right-20 w-80 h-80 rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)"}}),e("div",{className:"orb2 absolute bottom-16 left-10 w-96 h-96 rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)"}}),e("div",{className:"orb3 absolute top-1/2 left-1/2 w-64 h-64 rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",transform:"translate(-50%,-50%)"}}),e("div",{className:"absolute inset-0 pointer-events-none",style:{backgroundImage:"linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",backgroundSize:"60px 60px"}}),t("div",{className:"relative z-10 max-w-6xl mx-auto px-6 py-32 text-center w-full",children:[t("div",{className:"hero-tag inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-widest uppercase",children:[t("span",{className:"relative flex h-2 w-2",children:[e("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),e("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-blue-400"})]}),"Global Capability Centers"]}),t("h1",{className:" hero-h1 text-5xl md:text-7xl font-extrabold leading-tight mb-6",children:["Build. Control.",e("br",{}),e("span",{style:{background:"linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Scale. Innovate."})]}),e("p",{className:"hero-p text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed mb-10",children:"A Captive Global Capability Center (GCC) is a fully owned extension of your enterprise—designed for long-term value, deep expertise, and complete operational control."}),t("div",{className:"hero-cta flex flex-col sm:flex-row gap-4 justify-center",children:[t(c,{to:"/contact-us",className:"cta-btn inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 font-semibold text-base",style:{background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",color:"#fff"},"aria-label":"Talk to our GCC Experts",children:["Talk to Our GCC Experts ",e(s,{})]}),e("a",{href:"#why-captive",className:"inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 font-semibold text-base border border-white/20 text-white hover:bg-white/10 transition",children:"Explore Benefits"})]})]})]}),e("section",{id:"why-captive",className:"py-24 px-6",style:{background:"#f8faff"},"aria-label":"Why a Captive GCC",children:t("div",{className:"max-w-7xl mx-auto",children:[t(n,{className:"text-center mb-16",children:[e("span",{className:"text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3 block",children:"Strategic Advantages"}),t("h2",{className:" text-4xl md:text-5xl font-extrabold text-[#010c41] mb-4",children:["Why a"," ",e("span",{style:{background:"linear-gradient(to right, #2563eb, #166534)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Captive GCC?"})]}),e("p",{className:"text-gray-500 max-w-2xl mx-auto text-base",children:"More than cost efficiency — captive GCCs become strategic engines for innovation, quality, and growth."})]}),e("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:[{title:"Full Ownership & Governance",desc:"Complete control over people, processes, IP, and security. Your data, your decisions, your future.",icon:e(f,{}),color:"#3b82f6"},{title:"Deep Domain Expertise",desc:"Build institutional knowledge aligned to your core business processes and strategic goals.",icon:e(g,{}),color:"#8b5cf6"},{title:"Scalable Talent Engine",desc:"Access high-quality talent across technology and operations in one of the world's largest talent pools.",icon:e(x,{}),color:"#06b6d4"},{title:"Value-Led Cost Optimization",desc:"Efficiency combined with innovation, speed, and quality—not just headcount arbitrage.",icon:e(y,{}),color:"#10b981"},{title:"Cultural Alignment",desc:"Embed your enterprise culture, leadership practices, and values across every level of the center.",icon:e(v,{}),color:"#f59e0b"},{title:"Innovation at Scale",desc:"Transform your GCC into a hub for AI, automation, and next-gen product development.",icon:e(C,{}),color:"#ec4899"}].map((a,r)=>e(n,{delay:r*.08,children:t("div",{className:"card-hover gradient-border rounded-2xl     border-gradient-to-r from-blue-600 to-green-800  p-7 shadow-md h-full",style:{isolation:"isolate"},children:[e("div",{className:"icon-wrap w-14 h-14 mb-5 flex items-center justify-center rounded-xl text-white text-xl",style:{background:`linear-gradient(135deg, ${a.color}cc, ${a.color})`},"aria-hidden":"true",children:a.icon}),e("h3",{className:" font-bold text-lg text-[#010c41] mb-2",children:a.title}),e("p",{className:"text-sm text-gray-500 leading-relaxed",children:a.desc})]})},r))})]})}),e("section",{className:"py-24 px-6 bg-white","aria-label":"What we help you build",children:t("div",{className:"max-w-7xl mx-auto",children:[t(n,{className:"text-center mb-16",children:[e("span",{className:"text-sm font-semibold tracking-widest uppercase text-purple-600 mb-3 block",children:"Capabilities"}),e("h2",{className:"  text-4xl md:text-5xl font-extrabold text-[#010c41] mb-4",children:"What We Help You Build"}),e("p",{className:"text-gray-500 max-w-2xl mx-auto",children:"End-to-end GCC capabilities that operate as true innovation hubs."})]}),e("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[{title:"Technology & Engineering Centers",icon:e(w,{className:"text-3xl"}),desc:"Full-stack engineering, cloud, DevOps, and product development teams.",color:"#3b82f6",img:O},{title:"Analytics & Data Hubs",icon:e(N,{className:"text-3xl"}),desc:"Data science, ML, BI, and advanced analytics capabilities.",color:"#8b5cf6",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"},{title:"Shared Services & Operations",icon:e(k,{className:"text-3xl"}),desc:"Finance, HR, legal, and back-office operations at scale.",color:"#10b981",img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"},{title:"R&D and Innovation Labs",icon:e(G,{className:"text-3xl"}),desc:"Applied research, prototyping, AI/ML experimentation, and IP creation.",color:"#f59e0b",img:T}].map((a,r)=>e(n,{delay:r*.1,children:t("div",{className:"card-hover rounded-2xl overflow-hidden shadow-md bg-white h-full flex flex-col",children:[t("div",{className:"relative h-44 overflow-hidden",children:[e("img",{src:a.img,alt:`${a.title} - Captive GCC capability`,loading:"lazy",width:600,height:400,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-110"}),e("div",{className:"absolute inset-0",style:{background:`linear-gradient(to top, ${a.color}cc 0%, transparent 60%)`}}),e("div",{className:"absolute bottom-4 left-4 text-white","aria-hidden":"true",children:a.icon})]}),t("div",{className:"p-6 flex flex-col flex-1",children:[e("h3",{className:"  font-bold text-[#010c41] mb-2",children:a.title}),e("p",{className:"text-sm text-gray-500 leading-relaxed",children:a.desc})]})]})},r))})]})}),e("section",{className:"py-24 px-6",style:{background:"linear-gradient(180deg,#f8faff 0%,#fff 100%)"},"aria-label":"Our GCC setup process",children:t("div",{className:"max-w-5xl mx-auto",children:[t(n,{className:"text-center mb-16",children:[e("span",{className:"text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3 block",children:"Our Process"}),e("h2",{className:"  text-4xl md:text-5xl font-extrabold text-[#010c41] mb-4",children:"How We Set Up Your GCC"})]}),e("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 relative",children:[{num:"01",title:"Strategy & Design",desc:"Define operating model, location, talent strategy, and governance framework."},{num:"02",title:"Entity Setup",desc:"Legal entity formation, regulatory compliance, and facility setup."},{num:"03",title:"Talent Acquisition",desc:"Recruit, onboard, and train leadership and specialist teams at speed."},{num:"04",title:"Operate & Scale",desc:"Continuous optimization, knowledge transfer, and scaling the center."}].map((a,r)=>e(n,{delay:r*.12,children:t("div",{className:"flex flex-col items-center text-center",children:[t("div",{className:"relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-white mb-3",style:{background:"linear-gradient(135deg,#3b82f6,#8b5cf6)",fontSize:"1rem"},children:[a.num,r<3&&e("div",{className:"hidden md:block absolute left-full top-1/2 -translate-y-1/2 h-px w-full",style:{background:"linear-gradient(90deg,#3b82f6,#8b5cf6)",width:"calc(100% + 2rem)",left:"100%"},"aria-hidden":"true"})]}),e("h3",{className:"  font-bold text-[#010c41] mb-2",children:a.title}),e("p",{className:"text-sm text-gray-500",children:a.desc})]})},r))})]})}),e("section",{className:"py-20 px-6",style:{background:"#010c41"},"aria-label":"Why partner with us",children:e("div",{className:"max-w-6xl mx-auto",children:t("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",children:[t(n,{children:[e("span",{className:"text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3 block",children:"Why Us"}),t("h2",{className:"  text-4xl md:text-5xl font-extrabold text-white mb-6",children:["Your Trusted GCC"," ",e("span",{style:{background:"linear-gradient(90deg,#60a5fa,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Partner"})]}),e("p",{className:"text-blue-200/70 mb-8 leading-relaxed",children:"We combine deep operational expertise with a genuine outcome-first mindset—because a GCC should be your strategic advantage, not just a delivery center."}),e("ul",{className:"space-y-4",children:["Proven experience building GCCs at scale across industries","Strong talent ecosystem & tier-1 academic partnerships","Deep expertise across technology, analytics & operations","Outcome-driven, not headcount-driven approach","Embedded project governance from day one"].map((a,r)=>t("li",{className:"flex items-start gap-3",children:[e(S,{className:"text-blue-400 mt-1 flex-shrink-0","aria-hidden":"true"}),e("span",{className:"text-blue-100/80 text-sm",children:a})]},r))})]}),e(n,{delay:.2,children:t("div",{className:"relative",children:[e("img",{src:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85",alt:"Expert GCC consultants collaborating on strategy",loading:"lazy",width:800,height:600,className:"rounded-2xl w-full object-cover",style:{aspectRatio:"4/3"}}),t("div",{className:"absolute -bottom-6 -left-6 rounded-2xl p-5 shadow-2xl",style:{background:"linear-gradient(135deg,#3b82f6,#8b5cf6)"},children:[e("div",{className:"  text-3xl font-extrabold text-white",children:"150+"}),e("div",{className:"text-sm text-white/80 font-medium",children:"GCCs Delivered"})]})]})})]})})}),e("section",{className:"mt-10 bg-white","aria-label":"Client testimonial",children:e("div",{className:"max-w-3xl mx-auto text-center",children:t(n,{children:[e("div",{className:"text-4xl","aria-hidden":"true",style:{color:"#3b82f6"},children:'"'}),e("blockquote",{className:"text-xl md:text-2xl text-[#010c41] font-medium leading-relaxed ",style:{fontFamily:"Outfit, sans-serif"},children:"Our GCC went from concept to fully operational in 9 months — with a world-class team, robust governance, and immediate impact on our global delivery."})]})})}),e("section",{className:"py-24 px-6 bg-white","aria-label":"Call to action",children:t("div",{className:"max-w-6xl mx-auto rounded-3xl text-white text-center py-20 px-8 shadow-2xl relative overflow-hidden",style:{background:"linear-gradient(135deg, #010c41 0%, #0d0630 60%, #010c41 100%)"},children:[e("div",{className:"absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)"},"aria-hidden":"true"}),e("div",{className:"absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)"},"aria-hidden":"true"}),t(n,{className:"relative z-10",children:[t("span",{className:"inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-widest uppercase",children:[e("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-pulse"}),"Get Started Today"]}),e("h2",{className:" text-3xl md:text-5xl font-extrabold mb-4",children:"Ready to Build Your Captive GCC?"}),e("p",{className:"text-blue-200/70 max-w-2xl mx-auto mb-10 text-base leading-relaxed",children:"Let's design a GCC that becomes a strategic advantage — not just a delivery center. Our experts will guide you from strategy to scale."}),t("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t(c,{to:"/contact-us",className:"cta-btn inline-flex items-center justify-center gap-2 rounded-full px-12 py-4 font-semibold text-base",style:{background:"linear-gradient(135deg,#3b82f6,#8b5cf6)",color:"#fff"},"aria-label":"Talk to our GCC experts",children:["Talk to Our GCC Experts ",e(s,{})]}),e("a",{href:"#why-captive",className:"inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition",children:"Learn More"})]})]})]})}),e(j,{})]});export{$ as default};
