CREATE TABLE public.todos (
    ALTER TABLE public.todos ADD id int4 GENERATED ALWAYS AS IDENTITY NOT NULL;
    ALTER TABLE public.todos ADD CONSTRAINT todos_pk PRIMARY KEY (id);
    ALTER TABLE public.todos ADD description varchar NULL;
    ALTER TABLE public.todos ADD complete boolean DEFAULT false NULL;
);
