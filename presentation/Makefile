
CMD=pandoc

all: presentation.pdf

presentation.pdf:
	$(CMD) -t beamer -o presentation.{pdf,md}

clean:
	rm -f presentation.pdf

.PHONY: all clean

