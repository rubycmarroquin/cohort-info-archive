--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

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

--
-- Name: cc_seq; Type: SEQUENCE; Schema: public; Owner: rubymarroquin
--

CREATE SEQUENCE public.cc_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cc_seq OWNER TO rubymarroquin;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: code_challenge; Type: TABLE; Schema: public; Owner: rubymarroquin
--

CREATE TABLE public.code_challenge (
    code_id integer NOT NULL,
    title text,
    link text
);


ALTER TABLE public.code_challenge OWNER TO rubymarroquin;

--
-- Name: main_comments; Type: TABLE; Schema: public; Owner: rubymarroquin
--

CREATE TABLE public.main_comments (
    mc_id integer NOT NULL,
    code_id integer,
    comment text,
    username text
);


ALTER TABLE public.main_comments OWNER TO rubymarroquin;

--
-- Name: mc_seq; Type: SEQUENCE; Schema: public; Owner: rubymarroquin
--

CREATE SEQUENCE public.mc_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mc_seq OWNER TO rubymarroquin;

--
-- Name: sc_seq; Type: SEQUENCE; Schema: public; Owner: rubymarroquin
--

CREATE SEQUENCE public.sc_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sc_seq OWNER TO rubymarroquin;

--
-- Name: solution_comments; Type: TABLE; Schema: public; Owner: rubymarroquin
--

CREATE TABLE public.solution_comments (
    sc_id integer NOT NULL,
    solution_id integer,
    comment text,
    username text
);


ALTER TABLE public.solution_comments OWNER TO rubymarroquin;

--
-- Name: solutions; Type: TABLE; Schema: public; Owner: rubymarroquin
--

CREATE TABLE public.solutions (
    solution_id integer NOT NULL,
    code_id integer,
    username text,
    link text
);


ALTER TABLE public.solutions OWNER TO rubymarroquin;

--
-- Name: solutions_seq; Type: SEQUENCE; Schema: public; Owner: rubymarroquin
--

CREATE SEQUENCE public.solutions_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.solutions_seq OWNER TO rubymarroquin;

--
-- Data for Name: code_challenge; Type: TABLE DATA; Schema: public; Owner: rubymarroquin
--



--
-- Data for Name: main_comments; Type: TABLE DATA; Schema: public; Owner: rubymarroquin
--



--
-- Data for Name: solution_comments; Type: TABLE DATA; Schema: public; Owner: rubymarroquin
--



--
-- Data for Name: solutions; Type: TABLE DATA; Schema: public; Owner: rubymarroquin
--



--
-- Name: cc_seq; Type: SEQUENCE SET; Schema: public; Owner: rubymarroquin
--

SELECT pg_catalog.setval('public.cc_seq', 1, false);


--
-- Name: mc_seq; Type: SEQUENCE SET; Schema: public; Owner: rubymarroquin
--

SELECT pg_catalog.setval('public.mc_seq', 1, false);


--
-- Name: sc_seq; Type: SEQUENCE SET; Schema: public; Owner: rubymarroquin
--

SELECT pg_catalog.setval('public.sc_seq', 1, false);


--
-- Name: solutions_seq; Type: SEQUENCE SET; Schema: public; Owner: rubymarroquin
--

SELECT pg_catalog.setval('public.solutions_seq', 1, false);


--
-- Name: code_challenge code_challenge_pkey; Type: CONSTRAINT; Schema: public; Owner: rubymarroquin
--

ALTER TABLE ONLY public.code_challenge
    ADD CONSTRAINT code_challenge_pkey PRIMARY KEY (code_id);


--
-- Name: main_comments main_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: rubymarroquin
--

ALTER TABLE ONLY public.main_comments
    ADD CONSTRAINT main_comments_pkey PRIMARY KEY (mc_id);


--
-- Name: solution_comments solution_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: rubymarroquin
--

ALTER TABLE ONLY public.solution_comments
    ADD CONSTRAINT solution_comments_pkey PRIMARY KEY (sc_id);


--
-- Name: solutions solutions_pkey; Type: CONSTRAINT; Schema: public; Owner: rubymarroquin
--

ALTER TABLE ONLY public.solutions
    ADD CONSTRAINT solutions_pkey PRIMARY KEY (solution_id);


--
-- Name: main_comments main_comments_code_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rubymarroquin
--

ALTER TABLE ONLY public.main_comments
    ADD CONSTRAINT main_comments_code_id_fkey FOREIGN KEY (code_id) REFERENCES public.code_challenge(code_id);


--
-- Name: solution_comments solution_comments_solution_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rubymarroquin
--

ALTER TABLE ONLY public.solution_comments
    ADD CONSTRAINT solution_comments_solution_id_fkey FOREIGN KEY (solution_id) REFERENCES public.solutions(solution_id);


--
-- Name: solutions solutions_code_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rubymarroquin
--

ALTER TABLE ONLY public.solutions
    ADD CONSTRAINT solutions_code_id_fkey FOREIGN KEY (code_id) REFERENCES public.code_challenge(code_id);


--
-- PostgreSQL database dump complete
--

