package vn.com.pvcombank.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class TopicInTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TopicIn.class);
        TopicIn topicIn1 = new TopicIn();
        topicIn1.setId(1L);
        TopicIn topicIn2 = new TopicIn();
        topicIn2.setId(topicIn1.getId());
        assertThat(topicIn1).isEqualTo(topicIn2);
        topicIn2.setId(2L);
        assertThat(topicIn1).isNotEqualTo(topicIn2);
        topicIn1.setId(null);
        assertThat(topicIn1).isNotEqualTo(topicIn2);
    }
}
