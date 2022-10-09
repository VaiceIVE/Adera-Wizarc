--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-10-09 12:23:02

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 223 (class 1259 OID 16523)
-- Name: eventpics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eventpics (
    id integer NOT NULL,
    pic character varying
);


ALTER TABLE public.eventpics OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16514)
-- Name: events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    date timestamp without time zone NOT NULL,
    description character varying,
    picurl character varying
);


ALTER TABLE public.events OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16513)
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO postgres;

--
-- TOC entry 3433 (class 0 OID 0)
-- Dependencies: 221
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- TOC entry 228 (class 1259 OID 16575)
-- Name: market; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.market (
    id integer NOT NULL,
    user_id integer,
    name character varying(20) NOT NULL,
    des character varying NOT NULL,
    picurl character varying
);


ALTER TABLE public.market OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16574)
-- Name: market_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.market_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.market_id_seq OWNER TO postgres;

--
-- TOC entry 3434 (class 0 OID 0)
-- Dependencies: 227
-- Name: market_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.market_id_seq OWNED BY public.market.id;


--
-- TOC entry 226 (class 1259 OID 16562)
-- Name: privatekeys; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.privatekeys (
    id integer NOT NULL,
    privkey character varying NOT NULL
);


ALTER TABLE public.privatekeys OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16550)
-- Name: publickeys; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.publickeys (
    id integer NOT NULL,
    pubkey character varying NOT NULL
);


ALTER TABLE public.publickeys OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16452)
-- Name: reginfo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reginfo (
    users_id integer,
    mail character varying(50) NOT NULL,
    phone character varying(20) NOT NULL,
    password character varying(50) NOT NULL
);


ALTER TABLE public.reginfo OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16472)
-- Name: teams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teams (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    score integer
);


ALTER TABLE public.teams OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16471)
-- Name: teams_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_id_seq OWNER TO postgres;

--
-- TOC entry 3435 (class 0 OID 0)
-- Dependencies: 217
-- Name: teams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teams_id_seq OWNED BY public.teams.id;


--
-- TOC entry 219 (class 1259 OID 16478)
-- Name: teams_teamtraits; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teams_teamtraits (
    teams_id integer NOT NULL,
    teamtraits_id integer NOT NULL,
    amount integer NOT NULL
);


ALTER TABLE public.teams_teamtraits OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16463)
-- Name: teamtraits; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teamtraits (
    id integer NOT NULL,
    name character varying(40) NOT NULL,
    description character varying
);


ALTER TABLE public.teamtraits OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16462)
-- Name: teamtraits_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teamtraits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teamtraits_id_seq OWNER TO postgres;

--
-- TOC entry 3436 (class 0 OID 0)
-- Dependencies: 215
-- Name: teamtraits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teamtraits_id_seq OWNED BY public.teamtraits.id;


--
-- TOC entry 212 (class 1259 OID 16427)
-- Name: traits; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.traits (
    id integer NOT NULL,
    name character varying(40) NOT NULL,
    description character varying
);


ALTER TABLE public.traits OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16426)
-- Name: traits_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.traits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.traits_id_seq OWNER TO postgres;

--
-- TOC entry 3437 (class 0 OID 0)
-- Dependencies: 211
-- Name: traits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.traits_id_seq OWNED BY public.traits.id;


--
-- TOC entry 210 (class 1259 OID 16420)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(40) NOT NULL,
    lastname character varying(40) NOT NULL,
    job character varying(40),
    level integer NOT NULL,
    patronymic character varying(40),
    teams_id integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16535)
-- Name: users_events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_events (
    users_id integer NOT NULL,
    events_id integer NOT NULL
);


ALTER TABLE public.users_events OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16419)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3438 (class 0 OID 0)
-- Dependencies: 209
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 220 (class 1259 OID 16498)
-- Name: users_teamtraits; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_teamtraits (
    users_id integer NOT NULL,
    teamtraits_id integer NOT NULL,
    amount integer NOT NULL
);


ALTER TABLE public.users_teamtraits OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16435)
-- Name: users_traits; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_traits (
    users_id integer NOT NULL,
    traits_id integer NOT NULL,
    amount integer NOT NULL
);


ALTER TABLE public.users_traits OWNER TO postgres;

--
-- TOC entry 3225 (class 2604 OID 16517)
-- Name: events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- TOC entry 3226 (class 2604 OID 16578)
-- Name: market id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.market ALTER COLUMN id SET DEFAULT nextval('public.market_id_seq'::regclass);


--
-- TOC entry 3224 (class 2604 OID 16475)
-- Name: teams id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams ALTER COLUMN id SET DEFAULT nextval('public.teams_id_seq'::regclass);


--
-- TOC entry 3223 (class 2604 OID 16466)
-- Name: teamtraits id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teamtraits ALTER COLUMN id SET DEFAULT nextval('public.teamtraits_id_seq'::regclass);


--
-- TOC entry 3222 (class 2604 OID 16430)
-- Name: traits id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.traits ALTER COLUMN id SET DEFAULT nextval('public.traits_id_seq'::regclass);


--
-- TOC entry 3221 (class 2604 OID 16423)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3422 (class 0 OID 16523)
-- Dependencies: 223
-- Data for Name: eventpics; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.eventpics (id, pic) VALUES (1, 'event 01.png');
INSERT INTO public.eventpics (id, pic) VALUES (2, 'event 02');
INSERT INTO public.eventpics (id, pic) VALUES (3, 'event 03');
INSERT INTO public.eventpics (id, pic) VALUES (4, 'event 04');
INSERT INTO public.eventpics (id, pic) VALUES (5, 'event 05');
INSERT INTO public.eventpics (id, pic) VALUES (6, 'event 06');
INSERT INTO public.eventpics (id, pic) VALUES (7, 'event 07');
INSERT INTO public.eventpics (id, pic) VALUES (8, 'event 08');


--
-- TOC entry 3421 (class 0 OID 16514)
-- Dependencies: 222
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.events (id, name, date, description, picurl) VALUES (1, 'The International', '2003-08-03 15:15:00', 'Main event', NULL);
INSERT INTO public.events (id, name, date, description, picurl) VALUES (2, 'The International 22', '2022-10-08 15:15:00', 'Main event', NULL);
INSERT INTO public.events (id, name, date, description, picurl) VALUES (3, 'event 03', '2222-01-01 22:22:00', NULL, NULL);
INSERT INTO public.events (id, name, date, description, picurl) VALUES (4, 'event 04', '2222-01-01 22:22:00', NULL, NULL);
INSERT INTO public.events (id, name, date, description, picurl) VALUES (5, 'event 05', '2222-01-01 22:22:00', NULL, NULL);
INSERT INTO public.events (id, name, date, description, picurl) VALUES (6, 'event 06', '2222-01-01 22:22:00', NULL, NULL);
INSERT INTO public.events (id, name, date, description, picurl) VALUES (7, 'event 07', '2222-01-01 22:22:00', NULL, NULL);
INSERT INTO public.events (id, name, date, description, picurl) VALUES (8, 'event 08', '2222-01-01 22:22:00', NULL, NULL);


--
-- TOC entry 3427 (class 0 OID 16575)
-- Dependencies: 228
-- Data for Name: market; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3425 (class 0 OID 16562)
-- Dependencies: 226
-- Data for Name: privatekeys; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.privatekeys (id, privkey) VALUES (1, '239fa9b25610eb701f45ceedc15d2bb575ff0521d919554782319710bc427d37');
INSERT INTO public.privatekeys (id, privkey) VALUES (2, 'fe2a7f41aae3c63b8b0b606081fa389e8ec857ee45abee08fa6f334ab9983e37');


--
-- TOC entry 3424 (class 0 OID 16550)
-- Dependencies: 225
-- Data for Name: publickeys; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.publickeys (id, pubkey) VALUES (1, '0xd354127f5DB17D5b5d4e6321f24e5402fBD6BD49');
INSERT INTO public.publickeys (id, pubkey) VALUES (2, '0x358b6bDD4ec5B0Fbdd51ecD7c5bB612a1898c247');


--
-- TOC entry 3413 (class 0 OID 16452)
-- Dependencies: 214
-- Data for Name: reginfo; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.reginfo (users_id, mail, phone, password) VALUES (11, 'mail@mail', '8800', 'qwerty');
INSERT INTO public.reginfo (users_id, mail, phone, password) VALUES (12, 'mymail@mail', '80808080', 'asdasdasdads');
INSERT INTO public.reginfo (users_id, mail, phone, password) VALUES (14, 'myaaaaaaaaaamail@mail', '12312312312333', 'asdddwdwd');


--
-- TOC entry 3417 (class 0 OID 16472)
-- Dependencies: 218
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.teams (id, name, score) VALUES (4, 'collegeMages', NULL);
INSERT INTO public.teams (id, name, score) VALUES (5, 'ogreMages', NULL);


--
-- TOC entry 3418 (class 0 OID 16478)
-- Dependencies: 219
-- Data for Name: teams_teamtraits; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3415 (class 0 OID 16463)
-- Dependencies: 216
-- Data for Name: teamtraits; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.teamtraits (id, name, description) VALUES (2, 'increasedincome', NULL);
INSERT INTO public.teamtraits (id, name, description) VALUES (1, 'coffeesale', NULL);


--
-- TOC entry 3411 (class 0 OID 16427)
-- Dependencies: 212
-- Data for Name: traits; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.traits (id, name, description) VALUES (1, 'strong', NULL);
INSERT INTO public.traits (id, name, description) VALUES (2, 'smart', NULL);
INSERT INTO public.traits (id, name, description) VALUES (3, 'weak', NULL);
INSERT INTO public.traits (id, name, description) VALUES (4, 'dumb', NULL);


--
-- TOC entry 3409 (class 0 OID 16420)
-- Dependencies: 210
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, name, lastname, job, level, patronymic, teams_id) VALUES (8, 'Test', 'Subject', 'Statist', 1, 'Otcovich', NULL);
INSERT INTO public.users (id, name, lastname, job, level, patronymic, teams_id) VALUES (9, 'Test', 'Subject', 'Statist', 1, 'Otcovich', NULL);
INSERT INTO public.users (id, name, lastname, job, level, patronymic, teams_id) VALUES (11, 'Test', 'Subject', 'Statist', 1, 'Otcovich', NULL);
INSERT INTO public.users (id, name, lastname, job, level, patronymic, teams_id) VALUES (12, 'Testing', 'Useress', '', 1, 'Otcovich', NULL);
INSERT INTO public.users (id, name, lastname, job, level, patronymic, teams_id) VALUES (14, 'a', '07', '', 1, '13167', NULL);
INSERT INTO public.users (id, name, lastname, job, level, patronymic, teams_id) VALUES (2, 'Vanya', 'Ya', 'Backend', 3, 'Otcovich', 5);
INSERT INTO public.users (id, name, lastname, job, level, patronymic, teams_id) VALUES (3, 'Roma', 'Ne ya', 'Frontend', 5, 'Otcovich', 5);
INSERT INTO public.users (id, name, lastname, job, level, patronymic, teams_id) VALUES (4, 'Galya', 'Ne ya', 'Leader', 4, 'Otcovich', 5);
INSERT INTO public.users (id, name, lastname, job, level, patronymic, teams_id) VALUES (5, 'Andrei', 'Kto-to', 'Statist', 1, 'Otcovich', 5);
INSERT INTO public.users (id, name, lastname, job, level, patronymic, teams_id) VALUES (7, 'Test', 'User', 'Statist', 17, 'Otcovich', NULL);
INSERT INTO public.users (id, name, lastname, job, level, patronymic, teams_id) VALUES (1, 'Vasya', 'Pupkin', 'Statist', 1, 'Otcovich', 4);


--
-- TOC entry 3423 (class 0 OID 16535)
-- Dependencies: 224
-- Data for Name: users_events; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users_events (users_id, events_id) VALUES (1, 1);
INSERT INTO public.users_events (users_id, events_id) VALUES (1, 3);


--
-- TOC entry 3419 (class 0 OID 16498)
-- Dependencies: 220
-- Data for Name: users_teamtraits; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3412 (class 0 OID 16435)
-- Dependencies: 213
-- Data for Name: users_traits; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users_traits (users_id, traits_id, amount) VALUES (1, 1, 1);
INSERT INTO public.users_traits (users_id, traits_id, amount) VALUES (1, 2, 1);
INSERT INTO public.users_traits (users_id, traits_id, amount) VALUES (2, 2, 1);
INSERT INTO public.users_traits (users_id, traits_id, amount) VALUES (3, 2, 1);
INSERT INTO public.users_traits (users_id, traits_id, amount) VALUES (4, 1, 1);
INSERT INTO public.users_traits (users_id, traits_id, amount) VALUES (4, 2, 1);
INSERT INTO public.users_traits (users_id, traits_id, amount) VALUES (7, 1, 5);


--
-- TOC entry 3439 (class 0 OID 0)
-- Dependencies: 221
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.events_id_seq', 8, true);


--
-- TOC entry 3440 (class 0 OID 0)
-- Dependencies: 227
-- Name: market_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.market_id_seq', 1, false);


--
-- TOC entry 3441 (class 0 OID 0)
-- Dependencies: 217
-- Name: teams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teams_id_seq', 5, true);


--
-- TOC entry 3442 (class 0 OID 0)
-- Dependencies: 215
-- Name: teamtraits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teamtraits_id_seq', 1, false);


--
-- TOC entry 3443 (class 0 OID 0)
-- Dependencies: 211
-- Name: traits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.traits_id_seq', 4, true);


--
-- TOC entry 3444 (class 0 OID 0)
-- Dependencies: 209
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 14, true);


--
-- TOC entry 3246 (class 2606 OID 16529)
-- Name: eventpics eventpics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventpics
    ADD CONSTRAINT eventpics_pkey PRIMARY KEY (id);


--
-- TOC entry 3244 (class 2606 OID 16521)
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- TOC entry 3254 (class 2606 OID 16582)
-- Name: market market_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.market
    ADD CONSTRAINT market_pkey PRIMARY KEY (id);


--
-- TOC entry 3252 (class 2606 OID 16568)
-- Name: privatekeys privatekeys_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.privatekeys
    ADD CONSTRAINT privatekeys_pkey PRIMARY KEY (id);


--
-- TOC entry 3250 (class 2606 OID 16556)
-- Name: publickeys publickeys_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publickeys
    ADD CONSTRAINT publickeys_pkey PRIMARY KEY (id);


--
-- TOC entry 3234 (class 2606 OID 16456)
-- Name: reginfo reginfo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reginfo
    ADD CONSTRAINT reginfo_pkey PRIMARY KEY (mail);


--
-- TOC entry 3238 (class 2606 OID 16477)
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (id);


--
-- TOC entry 3240 (class 2606 OID 16482)
-- Name: teams_teamtraits teams_teamtraits_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams_teamtraits
    ADD CONSTRAINT teams_teamtraits_pk PRIMARY KEY (teams_id, teamtraits_id);


--
-- TOC entry 3236 (class 2606 OID 16470)
-- Name: teamtraits teamtraits_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teamtraits
    ADD CONSTRAINT teamtraits_pkey PRIMARY KEY (id);


--
-- TOC entry 3230 (class 2606 OID 16434)
-- Name: traits traits_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.traits
    ADD CONSTRAINT traits_pkey PRIMARY KEY (id);


--
-- TOC entry 3248 (class 2606 OID 16539)
-- Name: users_events users_events_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_events
    ADD CONSTRAINT users_events_pk PRIMARY KEY (users_id, events_id);


--
-- TOC entry 3228 (class 2606 OID 16425)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3242 (class 2606 OID 16502)
-- Name: users_teamtraits users_teamtraits_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_teamtraits
    ADD CONSTRAINT users_teamtraits_pk PRIMARY KEY (users_id, teamtraits_id);


--
-- TOC entry 3232 (class 2606 OID 16439)
-- Name: users_traits users_traits_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_traits
    ADD CONSTRAINT users_traits_pk PRIMARY KEY (users_id, traits_id);


--
-- TOC entry 3263 (class 2606 OID 16530)
-- Name: eventpics eventpics_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventpics
    ADD CONSTRAINT eventpics_id_fkey FOREIGN KEY (id) REFERENCES public.events(id);


--
-- TOC entry 3268 (class 2606 OID 16583)
-- Name: market market_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.market
    ADD CONSTRAINT market_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 3267 (class 2606 OID 16569)
-- Name: privatekeys privatekeys_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.privatekeys
    ADD CONSTRAINT privatekeys_id_fkey FOREIGN KEY (id) REFERENCES public.users(id);


--
-- TOC entry 3266 (class 2606 OID 16557)
-- Name: publickeys publickeys_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publickeys
    ADD CONSTRAINT publickeys_id_fkey FOREIGN KEY (id) REFERENCES public.users(id);


--
-- TOC entry 3258 (class 2606 OID 16457)
-- Name: reginfo reginfo_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reginfo
    ADD CONSTRAINT reginfo_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- TOC entry 3259 (class 2606 OID 16483)
-- Name: teams_teamtraits teams_teamtraits_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams_teamtraits
    ADD CONSTRAINT teams_teamtraits_team_id_fkey FOREIGN KEY (teams_id) REFERENCES public.teams(id);


--
-- TOC entry 3260 (class 2606 OID 16488)
-- Name: teams_teamtraits teams_teamtraits_teamtraits_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams_teamtraits
    ADD CONSTRAINT teams_teamtraits_teamtraits_id_fkey FOREIGN KEY (teamtraits_id) REFERENCES public.teamtraits(id);


--
-- TOC entry 3265 (class 2606 OID 16545)
-- Name: users_events users_events_events_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_events
    ADD CONSTRAINT users_events_events_id_fkey FOREIGN KEY (events_id) REFERENCES public.events(id);


--
-- TOC entry 3264 (class 2606 OID 16540)
-- Name: users_events users_events_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_events
    ADD CONSTRAINT users_events_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- TOC entry 3255 (class 2606 OID 16493)
-- Name: users users_teams_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_teams_id_fkey FOREIGN KEY (teams_id) REFERENCES public.teams(id);


--
-- TOC entry 3262 (class 2606 OID 16508)
-- Name: users_teamtraits users_teamtraits_teamtraits_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_teamtraits
    ADD CONSTRAINT users_teamtraits_teamtraits_id_fkey FOREIGN KEY (teamtraits_id) REFERENCES public.teamtraits(id);


--
-- TOC entry 3261 (class 2606 OID 16503)
-- Name: users_teamtraits users_teamtraits_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_teamtraits
    ADD CONSTRAINT users_teamtraits_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- TOC entry 3257 (class 2606 OID 16445)
-- Name: users_traits users_traits_traits_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_traits
    ADD CONSTRAINT users_traits_traits_id_fkey FOREIGN KEY (traits_id) REFERENCES public.traits(id);


--
-- TOC entry 3256 (class 2606 OID 16440)
-- Name: users_traits users_traits_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_traits
    ADD CONSTRAINT users_traits_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


-- Completed on 2022-10-09 12:23:03

--
-- PostgreSQL database dump complete
--

