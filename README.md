# [WIP] 🚧️ Renibarak 🚧️
**Renibarak** (or Karabiner spelled backwards, how original!) is a CLI and
library with a bunch of helpers in Javascript which allows you to generate
[Karabiner-Elements config files](https://pqrs.org/osx/karabiner/json.html).

Tired of dealing with very large and inflexible JSON files so often I decided to
make a tool that would allow me to manage, read and maintain my `karabiner.json`
and Complex Modifications files with ease giving it the power and flexibility
that a programming language can offer.

## Install
``` sh
npm install -g renibarak
```

## Command Line Interface
It takes a directory as first argument that contains a set of js files to be
transpiled to Karabiner-Elements compatible JSON files into the default config
directory `~/.config/karabiner/` unless a second directory is passed as argument
for a different destination.

If a `karabiner.js` file is found within the source directory it will be
transpiled to `karabiner.json`. The rest of `*.js` files will be treated as
Complex Modifications and therefore transpiled to JSON into the directory
`assets/complex_modifications/`. You are free to import the library in any of
these files and use any of the available helpers as you please.

### Usage
``` sh
$ renibarak [options] <source_dir> [destination_dir]
```

### Options
```sh
-w, --watch                Watch a directory or file
-i, --ignore-main          Write only complex_modifications files
-v, --version              Prints version info
-h, --help                 Print usage info
```

### Examples
#### Watch changes in current directory
``` sh
renibarak -w .
```

#### Only transpile Complex Modifications from dotfiles directory
``` sh
renibarak -i ~/.dotfiles/karabiner
```

#### Transpile files from dotfiles directory to a custom destination
``` sh
renibarak ~/.dotfiles/karabiner ~/.dotfiles/karabiner/json
```

## Config examples
For an example of Complex Modifications and main config file look at the
[examples/ directory](examples/).

## License
MIT © [Eduardo Ruiz](https://github.com/eduarbo)
