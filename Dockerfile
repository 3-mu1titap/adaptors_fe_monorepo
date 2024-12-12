FROM --platform=linux/amd64 node:20

WORKDIR /usr/src/app

# 모든 파일을 한번에 복사
COPY . .

# 의존성 설치 및 빌드
RUN npm install --force
RUN npm run build

EXPOSE 3000 3003

CMD ["npm", "run", "start"]