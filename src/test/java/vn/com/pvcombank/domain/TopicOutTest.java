package vn.com.pvcombank.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class TopicOutTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TopicOut.class);
        TopicOut topicOut1 = new TopicOut();
        topicOut1.setId(1L);
        TopicOut topicOut2 = new TopicOut();
        topicOut2.setId(topicOut1.getId());
        assertThat(topicOut1).isEqualTo(topicOut2);
        topicOut2.setId(2L);
        assertThat(topicOut1).isNotEqualTo(topicOut2);
        topicOut1.setId(null);
        assertThat(topicOut1).isNotEqualTo(topicOut2);
    }
}
