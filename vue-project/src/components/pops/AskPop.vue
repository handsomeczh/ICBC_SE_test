<template>
  <!-- todo 向我提问弹窗 -->
  <el-button type="text" class="ask-me" plain @click="openDialog">向我提问</el-button>
  <el-dialog
      v-model="goToAskPop"
      width="98%"
      @close="saveHistory"
  >
    <div class="common-layout">
      <el-container>
        <el-scrollbar height="400px">
          <div class="block">
            <!-- 历史记录 -->
            <div v-for="(msg, index) in chatHistory" :key="index" class="message" :class="msg.type">
              <el-avatar :class="[msg.type === 'ai' ? 'avatarAI' : 'avatarClient']" :size="30" :src="circleUrl"/>
              <el-main :class="[msg.type === 'ai' ? 'questions' : 'answer']" :style="{borderRadius:  `var(--el-border-radius-round)`}">
                <div>{{ msg.content }}</div>
              </el-main>
            </div>
          </div>
        </el-scrollbar>
        <el-divider/>
        <el-footer>
          <el-input
              v-model="input"
              style="max-width: 600px"
              placeholder="输入问题："
              @keyup.enter="askAI"
              autosize
          >
            <template #append>
              <el-button icon="Pointer" @click="askAI"/>
            </template>
          </el-input>
        </el-footer>
      </el-container>
    </div>
  </el-dialog>
  <!-- 向我提问 -->
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';

const goToAskPop = ref(false);
const input = ref('');
const circleUrl = ref('https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png');
const chatHistory = ref([]);

// 常见问题
const defaultQuestions = [
  "什么是积存金",
  "积存金买卖方式",
  "当前积存金价格",
  "如何兑换积存金为事物",
  "积存金手续计算"
];

// 将常见问题合并为一个对话框中的一条消息
const defaultQuestionsMessage = defaultQuestions.map((q, index) => `${index + 1}. ${q}`).join('\n');

// 打开对话框时加载常见问题和历史记录
const openDialog = () => {
  goToAskPop.value = true;
  chatHistory.value = [];

  // 加载历史记录
  const savedHistory = localStorage.getItem('chatHistory');
  if (savedHistory) {
    chatHistory.value = JSON.parse(savedHistory);
  }

  // 加载常见问题
  chatHistory.value.push({ type: 'ai', content: defaultQuestionsMessage });

  // 自动滚动到底部
  nextTick(() => {
    const container = document.querySelector('.el-scrollbar__wrap');
    container.scrollTop = container.scrollHeight;
  });
};

// 关闭对话框时保存历史记录
const saveHistory = () => {
  localStorage.setItem('chatHistory', JSON.stringify(chatHistory.value));
};

// 模拟AI助手回复
const getAIResponse = (question) => {
  // 模拟AI回复逻辑，这里可以替换为实际的AI回复逻辑
  return `这是对问题 "${question}" 的回复`;
};

// 发送消息问答界面
const askAI = () => {
  if (input.value.trim() === '') {
    ElMessage.warning('问题不能为空');
    return;
  }

  // 记录用户提问
  chatHistory.value.push({ type: 'user', content: input.value });

  // 模拟AI回复
  const aiResponse = getAIResponse(input.value);
  chatHistory.value.push({ type: 'ai', content: aiResponse });

  // 清空输入框
  input.value = '';

  // 自动滚动到底部
  nextTick(() => {
    const container = document.querySelector('.el-scrollbar__wrap');
    container.scrollTop = container.scrollHeight;
  });
};

</script>

<style scoped>
.ask-me {
  margin: 10px;
}


.block {
  display: flex;
  flex-direction: column;
}

.message {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.avatarAI {
  margin-right: 10px;
}

.avatarClient {
  margin-left: auto;
  order: 2;
}

.questions, .answer {
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
}

.questions {
  background-color: #e6f7ff;
}

.answer {
  background-color: #fff1e6;
  align-self: flex-end;
  margin-left: auto;
}
</style>
