## 🔐 node secrets assignment

this repository houses **three branches**, each of which correlates to one of the requirement secret management type. 

🔎 **note:** reflections for each secret type are consolidated below.

`➝ click to be directed to the appropriate branch:`

- [x] [hard coded secret](https://github.com/travoemily-fs/sad3/tree/hard-coded-secret)
- [x] [shared secret on repository](https://github.com/travoemily-fs/sad3/tree/shared-secret)
- [x] [non-shared files](https://github.com/travoemily-fs/sad3/tree/non-shared-files)

---
### 🧩 installation

1. **step one:** download the `.zip` file for the branch you are testing
2. **step two:** unzip the project and open it with your preferred ide
3. **step three:** install required dependencies using the terminal command `npm install`
4. **step four:** to run the node application, use the following prompt: `node app.js`

---
### ✍ assignment reflection

below you may find my reflections and observations recorded in relation to each of the three secret management processes.

🔎 **note:** there is also a `.pdf` version of this reflection, along with all required repository branch links included with initial assignment submission.

### part 1: hard coded secret
in this version, the application secret is hard-coded directly into the source code. it makes the application easy to run, but not very secure and vulnerable to malicious attacks. anyone who has access to this repository can see the secret, and is dangerous because secrets accidentally become permanently stored in version control history. it is not easy to reverse this or attempt to hide it after the fact.

### part 2: shared secret on repository
this version of secret management, the secret is stored inside a `.env` file and is loaded in through environment variables. however, the `.env` file is committed directly to the repository because it is not included within the `.gitignore` file when committed. while it's safer to store the secret separately from the source code, it is still insecure because the secret is publicly available and can easily be leaked.

### part 3: non-shared files
the final version of secret management for this assignment, secrets are not stored in the repository at all. in fact, there is a missing `.env ` file, even though the source code is constructed to look for it. because node is unable to find the `.env ` file with the secret, the application throws an error and refuses to start. this is the most secure approach because secrets are never committed to version control.

### what is the point of having a "." in front of the file?
files that start with a dot such as a `.env` file are hidden in most operating systems by default. this convention is utilized to indicate a configuration or system file that should not be normally edited or shared. it also makes things easier to exclude in the `.gitignore` file.