<template>
  <!-- todo 向我提问弹窗 -->
  <el-button type="text" class="ask-me" plain @click="openDialog"></el-button>
  <el-dialog
      :show-close="false"
      v-model="goToAskPop"
      class="ask-me-dialog"
  >
    <el-scrollbar height="400px">
      <!-- 常见问题 -->
      <div class="defaultQ">
        <div v-for="(q, i) in defaultQuestions" :key="i">
          <div @click="selectQuestion(i)">
            {{ i + 1 }}. {{ q }}
          </div>
          <el-divider/>
        </div>
      </div>
      <!-- 历史记录 -->
      <div v-for="(msg, index) in chatHistory" :key="index" class="message" :class="msg.type">
        <el-main :class="[msg.type === 'ai' ? 'questions' : 'answer']"
                 :style="{borderRadius: `var(--el-border-radius-round)`}">
          <div>{{ msg.content }}</div>
        </el-main>
      </div>
    </el-scrollbar>
    <el-divider/>
    <el-footer>
      <el-input
          v-model="input"
          placeholder="请输入 ..."
          @keyup.enter="askAI"
      >
        <template #append>
          <el-button style="font-weight: bold; background-color: #f9b628; border-color: #f9b628; color: black;"
                     @click="askAI">发送
          </el-button>
        </template>
      </el-input>
    </el-footer>
  </el-dialog>
  <!-- 向我提问 -->
</template>

<script setup>
import {ref, nextTick, onMounted} from 'vue';
import {ElMessage} from 'element-plus';
import 'element-plus/es/components/message/style/css';

const goToAskPop = ref(false);
const input = ref('');
const chatHistory = ref([]);

// 常见问题
const defaultQuestions = [
  "什么是积存金",
  "积存金买卖方式",
  "当前积存金价格",
  "如何兑换积存金为事物",
  "积存金手续计算"
];

const defaultAnswers = [
  "积存金是指在一定时间内，按照一定的价格和方式积累和存储的黄金。通常由银行或金融机构提供服务，" +
  "客户可以根据自己的投资需求，每月或定期购买一定金额的黄金，并存储在银行的账户中，逐渐积累黄金的数量。",
  "积存金的买卖方式主要有两种：定期定额购买和按市场价格即时买卖。定期定额购买是指客户每月" +
  "固定投资一定金额购买黄金，适合长期投资者；即时买卖是指客户可以根据市场黄金价格的变化，随时买入或卖出黄金，更灵活但需要关注市场动态。",
  "当前的积存金价格取决于国际市场上的黄金价格，实时波动。黄金价格受国际政治经济形势、通货" +
  "膨胀率、货币汇率等多种因素影响，投资者可以通过金融机构提供的实时价格查询渠道了解当前积存金的价格。",
  "要将积存金兑换为实物黄金，投资者可以通过银行或相关金融机构的指定渠道进行兑换。通常需要提" +
  "前预约，支付一定的加工和提取费用，兑换的实物黄金可以是金条、金币等，具体取决于金融机构的产品种类和规格。",
  "积存金的手续计算包括多个方面：购买费用（可能包含手续费）、存储费用（如银行的账户管理费）、卖出时的手续费" +
  "、以及可能的税费。不同的金融机构收费标准可能有所不同，投资者在进行积存金投资前应详细了解各项费用，以便做出合理的投资决策。"
];
// 当前选中的问题索引
const selectedQuestionIndex = ref(null);

// 选择问题并记录聊天历史
const selectQuestion = (index) => {
  selectedQuestionIndex.value = index;
  // 记录系统回答
  chatHistory.value.push({ type: 'ai', content: defaultAnswers[index] });
  // 自动滚动到底部
  nextTick(() => {
    const container = document.querySelector('.el-scrollbar__wrap');
    container.scrollTop = container.scrollHeight;
  });
};


// 打开对话框时加载常见问题和历史记录
const openDialog = () => {
  goToAskPop.value = true;

  // 自动滚动到底部
  nextTick(() => {
    const container = document.querySelector('.el-scrollbar__wrap');
    container.scrollTop = container.scrollHeight;
  });
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
  chatHistory.value.push({type: 'user', content: input.value});

  // 模拟AI回复
  const aiResponse = getAIResponse(input.value);
  chatHistory.value.push({type: 'ai', content: aiResponse});

  // 清空输入框
  input.value = '';

  // 自动滚动到底部
  nextTick(() => {
    const container = document.querySelector('.el-scrollbar__wrap');
    container.scrollTop = container.scrollHeight;
  });
};

// 页面刷新时清空历史记录
onMounted(() => {
  window.addEventListener('beforeunload', () => {
    chatHistory.value = [];
  });
});
</script>

<style scoped>
.ask-me {
  width: 110px;
  height: 110px;
  margin-top: 15px;
  margin-bottom: 50px;
  margin-left: 20px;
  flex: 1 1% 1%;
  background-image: url('@/assets/点我提问@3x.png'); /* 背景图片路径 */
  background-repeat: no-repeat;
  background-size: contain;
}

.message {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.questions, .answer {
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
}

.questions {
  background-color: #d6f1fd;
}

.answer {
  background-color: #f3d7af;
  align-self: flex-end;
  margin-left: auto;
}
</style>
<style>
.ask-me-dialog {
  width: 90%;
  height: 58%;
  background-image: url('@/assets/智能助手弹窗@2x.png');
  background-size: 100% 700px; /* 覆盖整个元素 */
  background-repeat: no-repeat;
  background-color: transparent; /* 弹窗背景颜色 */
  padding-top: 30px;
}

.defaultQ {
  background-color: #fef9f2;
  font-weight: bold;
  text-align: center;
  border-radius: 30px;
}
</style>
